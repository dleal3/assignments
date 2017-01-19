import React from 'react'
import { Link } from 'react-router'


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

  render (){
    return (
      <div>
        <h2>Contact List</h2>
        {
          this.props.contacts.map(
            (contact, i)=>{
              return (
                <Link to={`${contact.name}/${contact.email}/${contact.phone}/${contact.location}`}key={i} className="">
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







// export default React.createClass({
//   render() {
//     return (
//       <section>
//
//         <p> This is a fucking test to fucking see my shit work  </p>
//       </section>
//     )
//   }
// })
