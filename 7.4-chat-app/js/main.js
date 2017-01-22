import React from 'react'
import { ajax } from 'jquery'

export default React.createClass({

  getInitialState (){
    return {
      userNames: "",
      chatMessages: "",
      chatJsonData: []
    }
  },

  render (){
    <section className="chatAppBody">
      <div className="chatMessagesDisplay">
        {
          this.state.chatJsonData.map((currentPost, i)=>{
            return <p key={i} className="currentPost"> <span className="userNameStyle" >{currentPost.currentUser}</span> <span className="userMessageStyle">{currentPost.currentMessage}</span></p>
          })
        }
      </div>
      <form className="appForm">
        <input className="userNameInput" type="text" placeholder="User Name" onChange={this.onUserInputChange}/>
        <input className="messageText" type="text" placeholder="Message Text" placeholder=" Message Text" onChange={this.onMessageChange}/>
        <input className="submitMessage" type="submit" onClick={this.onSubmitMessage}/>
        <input className="clearButton" type="button" value="clear" onClick={this.onMessagesClear}/>
      </form>
    </section>
  }


})
