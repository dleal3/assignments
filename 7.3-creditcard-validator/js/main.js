import React from 'react'
import Validator from 'validator'

// USED DAVID's Github code to make sure I was able to get the initial state to render in my browser.

export default React.createClass({

  getInitialState(){
    return{
      // Gonna research just exsactly whats going on here
      isCreditCardValid: false,
      validityOutput: "",
      currentCardInput:"",
      // so from researching this site http://busypeoples.github.io/post/react-component-lifecycle/ was able to learn that the gitInitialState method is allowing us to set the initial state value.
      // The site also states that gitInitialState method is only called on once when initially rendering the component.
      // Still not 100% on this, maybe about 75% aware of how to use this. All I know for certain is that I am following convention.
    }
  },
  onCreditCardChange(e){
    var newCardInput = e.target.value
    this.setState({currentCardInput:newCardInput})
  },
  isThisCardValid(e){
    e.preventDefault();
    var validCard = Validator.isCreditCard(this.state.currentCardInput)
    this.setState({isCreditCardValid:validCard})

    if (validCard === false) {
      return this.setState({validityOutput:"Card Invalid"})
    } else {
      return this.setState({validityOutput:"Continue with Payment"})
    }
  },
  // Here we are setting up 2 imputs / One for entering a card number with a max length of 19 characters (16 numbers and 3 dashes) and a second input for the submit button.

  // Tried to research RegEx on site http://www.regular-expressions.info/creditcard.html to automatically insert dashes between the card number but than I found further information on a different site.
  // https://www.npmjs.com/package/react-native-credit-card-input This site says we can npm i --save react-native-credit-card-input which I assume will allow us to enter card numbers and it will include dashes automatically. I dont quite have this down yet, so I wont install anything BUT THE future me will :)
  render() {
    return(
      <div>
       <form className="cardForm">
        <input type="text" pattern="^4[0-9]{12}(?:[0-9]{3})?$" maxLength="19" onChange={this.onCreditCardChange} placeholder="xxxx-xxxx-xxxx-xxxx"/>
       </form>
        <input className="submit" type="submit" onClick={this.isThisCardValid}/>
        <h2 className={this.state.isCreditCardValid ? "valid" : "invalid"}>{this.state.validityOutput}</h2>
      </div>
    )
  }
})
