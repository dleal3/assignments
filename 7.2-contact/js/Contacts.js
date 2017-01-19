import React from 'react'
import { Link } from 'react-router'

// From Davids code as reference, I can see how here we are exporting the rendered params of the name, email, phone and location listed inside of an object tag that is wrapped in a paragraph tag and the email wrapped in an anchor tag.
// TOTALLY included the idea that David used to have a "mailto" link included when the email is clicked.
// I 'STEAL' CODE AND THAN REALIZE WHAT THE EFFF IS GOING ON! BITTERSWEET.. or is that just JR DEVING at it's best?
// Closed out by a Link to the home page
export default React.createClass({
  render() {
    return (
      <div className="contact_container">
        <h2>Contact</h2>
        <section>
          <p>{this.props.params.name}</p>
          <a href={"mailto:" +this.props.params.email} className="email_link">{this.props.params.email}</a>
          <p>{this.props.params.phone}</p>
          <p>{this.props.params.location}</p>
        </section>
        <Link to={'/'} className="back_button">Back to Contacts</Link>
      </div>
    )
  }
})
