import React from 'react'
import { expect } from 'chai'

import { mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import SearchResultPagination from '../../src/components/search-result-pagination'


describe('<SearchResultPagination />', () => {
  const baseStore = createMockStore({ userStore: {} })

  it('can render no results', () => {
    const props = { resultCount: 0, pageSize: 0, currentPage: 0, searchNavLinks: {}, query: '' }
    const context = mount(<SearchResultPagination {...props} store={baseStore} />)
    expect(context.find('.pagination').length).to.equal(1)
    expect(context.find('.prevLink').length).to.equal(1)
    expect(context.find('.nextLink').length).to.equal(1)
    expect(context.find('.pagelink').length).to.equal(0)
  })

  it('can render 10 results', () => {
    const props = { resultCount: 10, pageSize: 5, currentPage: 1, searchNavLinks: {}, query: 'cats' }
    const context = mount(<SearchResultPagination {...props} store={baseStore} />)
    expect(context.find('.pagination').length).to.equal(1)
    expect(context.find('.prevLink').length).to.equal(1)
    expect(context.find('.nextLink').length).to.equal(1)
    expect(context.find('.pagelink').length).to.equal(2)
  })

  it('can render 100 results', () => {
    const props = { resultCount: 100, pageSize: 5, currentPage: 1, searchNavLinks: {}, query: 'cats' }
    const context = mount(<SearchResultPagination {...props} store={baseStore} />)
    expect(context.find('.pagination').length).to.equal(1)
    expect(context.find('.prevLink').length).to.equal(1)
    expect(context.find('.nextLink').length).to.equal(1)
    expect(context.find('.pagelink').length).to.equal(4)
  })

  it('can render 100 results starting on page 2', () => {
    const props = { resultCount: 100, pageSize: 5, currentPage: 2, searchNavLinks: {}, query: 'cats' }
    const context = mount(<SearchResultPagination {...props} store={baseStore} />)
    expect(context.find('.pagination').length).to.equal(1)
    expect(context.find('.prevLink').length).to.equal(1)
    expect(context.find('.nextLink').length).to.equal(1)
    expect(context.find('.pagelink').length).to.equal(5)
  })


  it('can render 100 results starting on page 4 with a max of 3 prev and 3 next links', () => {
    const props = { resultCount: 100, pageSize: 5, currentPage: 4, searchNavLinks: {}, query: 'cats' }
    const context = mount(<SearchResultPagination {...props} store={baseStore} />)
    expect(context.find('.pagination').length).to.equal(1)
    expect(context.find('.prevLink').length).to.equal(1)
    expect(context.find('.nextLink').length).to.equal(1)

    // we show current page and a max of 3 prev and 3 next pages, like the current petition system
    expect(context.find('.pagelink').length).to.equal(7)
  })
})
