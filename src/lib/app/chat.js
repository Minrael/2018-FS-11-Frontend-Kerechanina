import React, { Component } from 'react';
import '../../App.css';
import './chat.css';
import  MessageList  from '../components/message-list/message-list.js';
import  InputForm  from '../components/input/input-form.js';
import Message from '../components/message-list/message.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Chat extends Component {
  
    constructor(props) {
      super(props);
		this.state = {

			text: '',
			/*file: '',*/
			/*geoposition: ''*/
			
			
		}
     this.updateMessage = this.updateMessage.bind(this);
   /*  this.updateFile = this.updateFile.bind(this);
     this.updateGeo = this.updateGeo.bind(this);*/
    }


    updateMessage(text) {
    	this.setState({text});
    }


  /*  updateFile(file) {
    	this.setState({file});
    }*/

   /* updateGeo(file) {
    	this.setState({geoposition: 'geo'});
    }*/

    render() {
        return (
	    <div id = "app">

		<nav id = "locNav" />
		<MessageList txtMessage = {this.state.text} /*fileMessage = {this.state.file} geoMessage = {this.state.geoposition}*//>
		<InputForm updateMessage = {this.updateMessage} /*updateFile = {this.updateFile} updateGeo = {this.updateGeo}*//>

	    </div>
        );
      }
    }

export default Chat;
