// Grabbing react from node_modules
import React from 'react'

export default React.createClass({
  getInitialState: function() {
    return {
      input: ''
    };
  },
  onAddButtonClick(e) {
    e.preventDefault();
    var currentInputValue = this.state.inputValue;
  },
  updateInputValue: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  },

  render() {
    return (
    <section className="section">
      <h2 className= "h2" > Gifts To Buy </h2>
      <main>
        <form>
          <input placeholder= "Enter Text Here" className= "giftInputText" onvalue={ this.state.inputValue } onChange={ this.updateInputValue } type="text" value={this.state.inputValue} ></input>
          <input placeholder= "ADD" className= "addButton" type="submit" onClick={this.onADDButtonClick}></input>
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
