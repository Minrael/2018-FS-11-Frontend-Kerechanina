import React, { Component } from 'react';
import './data.css';

class File extends Component {

    constructor(props) {
      super(props);
    }


    render() {

      const props = this.props;

      return (
        <div id = "tData">
		<p id = 'mesText'>{this.props.txt}</p>
		<p id = 'mesTime'>{this.props.tm}</p>
        </div>
	);

	}
}

export default File;
