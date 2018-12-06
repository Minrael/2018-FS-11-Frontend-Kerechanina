import React, { Component } from 'react';


class InputForm extends Component {

    constructor(props) {
      super(props);
      this.state = {input: ''};

      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
      alert(`Ok`);
      event.preventDefault();
    }

    onInputChange(event) {
      this.setState({input: event.target.value});
    }

	render() {

      return (
        <form onSubmit={this.onSubmit}>
          <p><label><input type="text" name="input" value={this.state.input} onChange={this.onInputChange} placeholder = "Cообщение"/></label></p> 
          <p><input type="submit" value="Submit" /></p>
        </form>
	);

	}
}

export default InputForm;
