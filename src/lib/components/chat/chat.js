import React, { Component } from 'react';
import '../../../App.css';
import './chat.css';
import  MessageList  from '../message-list/message-list.js';
import  InputForm  from '../input/input-form.js';

class Chat extends Component {
  
    constructor(props) {
      super(props);
		this.state = {
			text: ''	
		}
     this.updateMessage = this.updateMessage.bind(this);
    }


    updateMessage(text) {
    	this.setState({text});
    }


    render() {
        return (
	    <div id = "app">
		<nav id = "locNav" />
		<MessageList txtMessage = {this.state.text}/>
		<InputForm updateMessage = {this.updateMessage}/>
	    </div>
        );
      }
    }

export default Chat;
