import React, { Component } from 'react';
import Input from '../components/input';

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
		  return  <Input 
			key = {key} 
			elementType = {element.elementType}
			value = {element.value}
			changed = {(event) => this.handleInput(event, key)}  
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
