import React, { Component } from 'react';


class File extends Component {

    constructor(props) {
      super(props);
    }


    render() {

      const props = this.props;

      return (
        <div className = {props.receiver}>
		<img src={ props.imageUrl } />
        </div>
	);

	}
}

export default File;
