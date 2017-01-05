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
    <section>
      <h2> Gifts To Buy </h2>
      <main>
        <form>
          <input></input><input></input>
          <div>
            <article></article>
            <article>
              <p>Total</p>
              <p>$</p>
              <p>0</p>
            </article>
          </div>
        </form>
      </main>
    </section>
    )
  }

});
