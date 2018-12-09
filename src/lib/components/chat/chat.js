import React, { Component } from 'react';
import '../../../App.css';
import './chat.css';
import  MessageList  from '../message-list/message-list.js';
import  InputForm  from '../input/input-form.js';

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
