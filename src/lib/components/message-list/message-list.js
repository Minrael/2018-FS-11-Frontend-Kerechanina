import React, { Component } from 'react';

class MessageList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	addmess() {

		this.setState({});


		/*var myHeaders = new Headers();

		var formData = new FormData();
		formData.append("message", text);

		var myInit = {
			method: 'POST',
			body: formData,
			mode: 'cors',
			cache: 'default'
		}

		fetch('http://localhost:8081', {mode: 'no-cors'}, myInit).then(function(response) {
			console.log('0');
			return response.blob();
		}).then(function(response) {
			var div = document.querySelector('message-list').shadowRoot.lastElementChild;
			div.innerHTML = text;		
		});*/
	}

	render() {

		return (
		<div>
			Message-list
		</div>
		

		)

	}
}

export default MessageList;
