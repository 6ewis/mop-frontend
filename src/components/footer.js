import React from 'react'

const Footer = () => (
  <div className="container footer">
    <div className="row">
      <div className="span4">
        <div className="footer">
          <h1 className="moveon-masthead">
            <a href="#">MoveOn.org&reg;</a>
          </h1>
        </div>
        <div className="row">
          <div className="span4">
            <a className="icon-start icon-link-narrow" href="http://petitions.moveon.org/create_start.html?source=bnav">Start a Petition</a>
            <a className="icon-link-narrow icon-managepetitions" href="http://petitions.moveon.org/dashboard.html">Dashboard</a>
            <ul className="nav">
              <li><a className="lh-14 navlink" href="/login/do_logout.html?redirect=/index.html">Logout</a></li>
              <li><a href="http://petitions.moveon.org/organizations.html">Organizations</a></li>
              <li><a href="http://front.moveon.org/category/victories/">Victories</a></li>
              <li><a href="https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511">Donate</a></li>
              <li><a href="http://pol.moveon.org/feedback/press/">Press</a></li>
              <li><a href="http://petitions.moveon.org/feedback.html">Contact</a></li>
              <li><a href="http://front.moveon.org/blog/">Blog</a></li>
              <li><a href="http://petitions.moveon.org/login/register.html">Sign Up</a></li>
              <li><a href="http://petitions.moveon.org/privacy.html">Privacy Policy</a></li>
              <li><a href="http://petitions.moveon.org/terms.html">Terms of Use</a></li>
              <li><a href="http://front.moveon.org/careers">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lh-20 span8 disclaimer bump-top-1">
        <p>A joint website of MoveOn.org Civic Action and MoveOn.org Political Action.</p>
        <p><a href="http://civic.moveon.org/">MoveOn.org Civic Action</a> is a 501(c)(4) organization which primarily focuses on nonpartisan education and advocacy on important national issues. MoveOn.org Political Action is a federal political committee which primarily helps members elect candidates who reflect our values through a variety of activities aimed at influencing the outcome of the next election. MoveOn.org Political Action and MoveOn.org Civic Action are separate organizations.</p>
      </div>
    </div>
    <ul className="unstyled">
      <li><a href="http://www.facebook.com/moveon" className="icon-fb black-navlink">Follow us on Facebook</a></li>
      <li><a href="http://www.twitter.com/moveon" className="icon-twitter black-navlink">Follow us on Twitter</a></li>
      <li><a href="http://civic.moveon.org/keepmeposted/" className="icon-join black-navlink">Newsletter Signup</a></li>
    </ul>
  </div>
)

export default Footer
