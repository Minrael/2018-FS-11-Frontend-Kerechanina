import React, { Component } from 'react';
import input from '../components/input';

class Auth extends Component {

	state = {
		loginForm:{
		  login:{
		     elementType: 'input',
		     value: '',

		   },
		   password: {
		     elementType: 'textarea',
		     value: '',
		   }
		}
	};

	hendleInput = (event) => {
	  console.log(event);
	};


	render() {
	    console.log(this.state.loginForm);
	    const inputs = Object
		.keys(this.state.loginForm)
		.map(key => {
		  const element = this.state.loginForm[key];
		  return  <input 
			key = {key} 
			elementType = {element.elementType}
			value = {element.value}
			changed = {this.handleInput}  
			placeholder= 'Login'/>
	    });
	    return(
		<div>
		    {inputs}
		</div>
	    );
	}
}



export default Auth;
