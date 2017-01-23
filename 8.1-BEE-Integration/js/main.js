// I had to refer to Lucio Gutierrez code for this. I followed his code to be able to get the project completed.
//  I would not have been able to have a project with out Lucio's code reference.


import React from 'react'
import { ajax } from 'jquery'


// I referred to the previous project 5.3-react giftcard to get familiar again with how we use the react boiler plate

export default React.createClass({
  componentDidMount() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/DanielsChat-app",
      dataType: "json",
      success: this.onAjaxInitialLoad
    })
  },

//
  getInitialState() {
    return {
      chats: "",
      chatHistory: []
    }
  },

  onAjaxInitialLoad(response){
    var chatAppended = response.reverse()
    this.setState({
      chatHistory: chatAppended
    })
  },

  onPostAjaxLoad(response){
    this.setState({
      chatHistory:this.state.chatHistory.concat(response)
    })
  },

  onChatChange(e) {
    var currentChatInput = e.target.value
    console.log(currentChatInput)
    this.setState({
      chats: currentChatInput
    })
  },
  onChatSubmit(e) {
    e.preventDefault()
    var currentChat = this.state.chats
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/DanielsChat-app",
      dataType: "json",
      type: "post",
      data: {
        currentChat
      },
      success: this.onPostAjaxLoad
    })
  },

  render(){
    return(
      <section>
        <aside className="aside">
          <h2 className="IronJediChat"> Iron Jedi's Chat </h2>
          <h6 className="user-marg"> Nic </h6>
          <h6 className="user-marg"> Lucio </h6>
          <h6 className="user-marg"> David </h6>
          <h6 className="user-marg"> Reese </h6>
          <h6 className="user-marg"> Daniel </h6>
          <h6 className="user-marg"> Terika </h6>
          <h6 className="user-marg"> Justin </h6>
          <h6 className="user-marg"> Jeremy </h6>


        </aside>
        <section className="navBar">
          <img className="navIcons" src="https://s-media-cache-ak0.pinimg.com/736x/60/b7/30/60b73041000047d4e8737d4eee9c5a08.jpg"/>
          <img className="navIcon-star" src="http://www.mesewcrazy.com/wp-content/uploads/2015/09/Vader_stencil.png"/>
          <img className="navIcon-at" src="http://blog.attackemart.in/content/images/2015/12/kylo-ren-helmet.svg"/>
          <img className="navIcon-chat" src="http://www.clipartkid.com/images/778/baby-yoda-clipart-CO1BV1-clipart.jpg"/>
          <img className="navIcon-settings" src="http://www.hothbricks.com/wp-content/uploads/2013/02/10240-red-five-xwing-starfighter-ucs-2.jpg"/>
          <img className="navIcon-phone" src="https://images-na.ssl-images-amazon.com/images/G/01/toys/detail-page/2011/B0071NOU78-2.jpg"/>

        </section>

        <section>
          <article className="mainSection">
            {
              this.state.chatHistory.map((chat, i)=>{
                return <p className="posts"><img className="chatImage" src="http://www.fontspace.com/preview/m/a0217bd3c2e5532848ea49cfa3e2e789.png"/><h4 className="userName">: </h4><span key={i}> { chat.currentChat} </span></p>
              })
            }

          </article>
      <form className="chatInput">
        <button className="submitButton" onClick={ this.onChatSubmit } type="submit"> + </button>
        <input className="chatBar" onChange={this.onChatChange} placeholder=" Type message here" type="text"/>
      </form>
    </section>
  </section>
    )
  },



})
