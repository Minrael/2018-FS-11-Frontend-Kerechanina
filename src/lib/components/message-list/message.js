import React, { Component } from 'react';


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
        <div>
		<p> {this.props.txtMessage} </p>
		<p> {this.props.fileMessage} </p>
        </div>
	);

	}
}

export default Message;
