import React, { Component } from 'react';
import './App.css';
import  MessageList  from './lib/components/message-list/message-list.js';
import  InputForm  from './lib/components/input/input-form.js';
import Message from './lib/components/message-list/message.js';


class App extends Component {
  
    constructor(props) {
      super(props);
		this.state = {

			text: 'I am a text message',
			file: 'I am loaded file',
			geoposition: ''
			
		}
     this.updateMessage = this.updateMessage.bind(this);
     this.updateFile = this.updateFile.bind(this);
    }


    updateMessage(text) {
    	this.setState({text});
    }


    updateFile(file) {
    	this.setState({file});
    }

    render() {
        return (
	    <div id = "app">

		<nav />
		
		<Message txtMessage = {this.state.text} fileMessage = {this.state.file}/>
		<InputForm updateMessage = {this.updateMessage}/>
	    </div>
        );
      }
    }

export default App;
