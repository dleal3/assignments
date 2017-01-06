// Grabbing react from node_modules
import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      output: "enter gift item here"
    };
  },


  render() {
    return (
    <section className="section">
      <h2 className= "h2" > Gifts To Buy </h2>
      <main>
        <form>
          <input placeholder= "Enter Text Here" className= "giftInputText" value={ this.state.inputValue } onChange={this.updateInputValue}></input>
          <input placeholder= "ADD" className= "addButton" onClick={this.onAddButtonClick}></input>
          <div className="listItems_div">
            <article className="listItem"></article>
            <article className="totalAmount">
              <p className="totalTextOnly">Total</p>
              <p className="p">$</p>
              <p className="p__totalCost">0</p>
            </article>
          </div>
        </form>
      </main>
    </section>
    )
  }

});
