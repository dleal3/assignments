// Grabbing react from node_modules
import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      output: "enter gift item here"
    }
  },
  render() {
    return (
      <form>
        <input></input>
        <input></input>
      </form>
    )
  }

});
