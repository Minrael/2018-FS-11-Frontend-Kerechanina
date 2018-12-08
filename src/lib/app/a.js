import React, { Component } from 'react';
import '../../App.css';
import  MessageList  from '../components/message-list/message-list.js';
import  InputForm  from '../components/input/input-form.js';
import Message from '../components/message-list/message.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class AppNew extends Component {
  
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

		<nav id = "locNav" />
		<MessageList txtMessage = {this.state.text} />
		<InputForm updateMessage = {this.updateMessage} updateFile = {this.updateFile}/>

	    </div>
        );
      }
    }

export default AppNew;
