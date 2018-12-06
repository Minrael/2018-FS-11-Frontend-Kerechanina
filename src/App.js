import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import  LoginForm  from './loginForm.js';
import  MessageList  from './lib/components/message-list/message-list.js';
import  InputForm  from './lib/components/input/input-form.js';
import  MessageForm  from './lib/components/message-form/message-form.js';

class App extends Component {
  render() {
    console.log('0');
    return (
	<div id = "app">

		<nav>
		</nav>
		<form />
		<MessageList />
		<InputForm />
		<MessageForm />
	</div>
    );
  }
}

export default App;
