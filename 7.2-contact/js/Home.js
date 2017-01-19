import React from 'react'
import { Link } from 'react-router'

// refered to David's code to get my home page default props to display just the contact names
export default React.createClass({
  getDefaultProps(){
    return {
      contacts: [
        {
          name: "Miriam Laird",
          email: "purdylbg@yahoo.com",
          phone: "210-560-4039",
          location: "San Antonio, TX",
        },
        {
          name: "Erica Dehoyos",
          email: "erica.dehoyos2885@gmail.com",
          phone: "210-288-9716",
          location: "San Antonio, TX",
        },
        {
          name: "Garrett Amons",
          email: "garrett.amons@email.com",
          phone: "210-234-5678",
          location: "San Antonio, TX",
        }
      ]
    }
  },

// Also used Davids code as reference to see how he rendered just the contact but included a function that would Link to further details of the clicked name.
  render (){
    return (
      <div className="home_container">
        <h2 className="header">Daniels Connections</h2>
        {
          this.props.contacts.map(
            (contact, i)=>{
              return (
                <Link to={`${contact.name}/${contact.email}/${contact.phone}/${contact.location}`}key={i} className="contact_links">
                  {contact.name}
                </Link>
              )
            }
          )
        }
      </div>
    )
  }
})
