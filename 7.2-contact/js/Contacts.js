import React from 'react'
import { Link } from 'react-router'

// export default React.createClass({
//   getInitialState(){
//     return {
//       contacts: {
//         0: {
//           name: "Miriam Laird"
//           email: "miriamlaird@gmail.com"
//           phone: "210-212-0012"
//           location:"San Antonio, TX"
//         },
//         1: {
//           name: "Erica Dehoyos"
//           email: "ericaDehoyos@gmail.com"
//           phone: "210-222-2212"
//           location: " San Antonio, TX"
//         }
//       }
//     }
//   }
// })




export default React.createClass({
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <section>
          <p>{this.props.params.name}</p>
          <a href={"mailto:" +this.props.params.email}>{this.props.params.email}</a>
          <p>{this.props.params.phone}</p>
          <p>{this.props.params.location}</p>
        </section>
        <Link to={'/'} className="#">Back to Contacts</Link>
      </div>
    )
  }
})
