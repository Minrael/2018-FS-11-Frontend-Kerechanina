import React, { Component } from 'react';
import submit from "../../../static/mailsend_104372.png"
import geoposition from "../../../static/-place_90615.png"
import attach from "../../../static/attach-rotated_icon-icons.com_68593.png"
import styles from "../../../App.css"


class InputForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
		input: '',
		file: ''	
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.geoposition = this.geoposition.bind(this);
      this.loadFile = this.loadFile.bind(this);
    }

    onSubmit(event){
      event.preventDefault();
      if (this.state.input !== '') {
	this.props.updateMessage(this.state.input);
	this.setState({input: ''});
      }
    }

    onInputChange(event) {
      this.setState({input: event.target.value});
    }


    onFileChange(event) {
      this.setState({file: event.target.value});
    }

    geoposition() {
	function getPosition (opts) { 
		return new Promise((resolve, reject) => { 
			navigator.geolocation.getCurrentPosition(resolve, opts); 

		}); 
	} 

	getPosition().then((position) => {

		this.setState({input: 'Мои координаты: ' + position.coords.latitude + ', ' + position.coords.longitude});
	})
    }


    loadFile(event) { 
	event.preventDefault(); 
	var reader = new FileReader(); 
	var file = event.target.files[0]; 
	reader.readAsDataURL(file); 
	this.props.updateMessage('File: ' + file.name); 

    }

    render() {

      return (
	
        <form onSubmit={this.onSubmit} id = "input_form">
          	<label>
			<input type="text" name="input" value={this.state.input} onChange={this.onInputChange} placeholder = "Cообщение" />	
		</label> 
	<label htmlFor="submit" className="submitButton"><img src={ submit } alt = "Submit button"></img></label>
	<button id="submit" style={{display: 'none'}} />

        <label htmlFor="attach" className="attachButton"><img src={ attach } alt = "Attach button"></img></label>
	<input type="file" style={{display: 'none'}} onChange={this.loadFile} id="attach"/>

	<label htmlFor="geoposition" className="geoButton"><img src={ geoposition } alt = "Geoposition button"></img></label>
	<button id="geoposition" onClick={this.geoposition} style={{display: 'none'}} />

        </form>
	);

	}
}


export default InputForm;
