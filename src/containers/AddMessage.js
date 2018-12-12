import { connect } from 'react-redux'
import { addMessage } from '../actions'
import React from 'react'
import '../App.css';
import submit from '../static/mailsend_104372.png'
import geo from "../static/-place_90615.png"
import attach from "../static/attach-rotated_icon-icons.com_68593.png"

function readFile(file) {
  let fileReader = new FileReader();

  return new Promise((resolve, reject) => {
      fileReader.onload = e => {
          let dataURI = e.target.result;
          resolve(dataURI);
      }
      fileReader.readAsDataURL(file); 
  })
}; 


function loadFile(event) {
  return new Promise((resolve, reject) => {
    event.preventDefault();
    var reader = new FileReader();
    var file = event.target.files[0];
    reader.readAsDataURL(file);

    resolve(file.name);
    
  })

};

function geoposition() {

  function getPosition (opts) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, opts);
    });
  };
  return getPosition();
};


const InputComponent = (props) => {
  let input;

  return (
    <section id="newMessage">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter' & input.value !== '') {
          props.dispatch(input.value);
          input.value = ''
        }
      }}
        type="text"
	placeholder = "Cообщение"
        ref={(node) => {
        input = node
      }}
      />

      <button id="submit"
	onClick={(e) => {
        props.dispatch(input.value);
        input.value = ''
      }}>
        <img alt="" className="Button" src={ submit }></img>
      </button>

      <button>
        <label htmlFor="attach" className="Button">
          <img alt="" id="Button" src={ attach }></img>
        </label>
      </button>

	<input type="file"  id="attach"
	  style={{display: 'none'}} 
	  onChange={(event) => { 
        	loadFile(event).then( function(result, bool) {       
            	props.dispatch(result);
        });
      }}/>


      <button id="geo"  onClick={(event) => {
        geoposition().then(function(result) {
          props.dispatch('Мои координаты: ' + result.coords.latitude + ', ' + result.coords.longitude);
        })
      }}>
        <img alt="" className="Button" src={ geo }></img>
      </button>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatch: (message) => {
    dispatch(addMessage(message))
  }
})


export const AddMessage = connect(() => ({}), mapDispatchToProps)(InputComponent)
