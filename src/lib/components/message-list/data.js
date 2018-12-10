import React, { Component } from 'react';
import './data.css';

class Data extends Component {

    render() {

      return (
        <div id = "tData">
		<p id = 'mesText'>{this.props.txt}</p>
		<p id = 'mesTime'>{this.props.tm}</p>
        </div>
	);

	}
}

export default Data;
