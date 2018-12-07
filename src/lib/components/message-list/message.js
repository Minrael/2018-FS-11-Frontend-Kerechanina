import React, { Component } from 'react';
import '../../../App.css';

class Message extends Component {

    constructor(props) {
      super(props);
		this.state = {
			text: 'mess'
		}

    }


    render() {

      const props = this.props;

      return (
        <div name = "Message">
		<p> {this.props.txt} </p>
        </div>
	);

	}
}

export default Message;
