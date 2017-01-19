import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header>
        <h1> Daniels Connections </h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
    )
  }
})
