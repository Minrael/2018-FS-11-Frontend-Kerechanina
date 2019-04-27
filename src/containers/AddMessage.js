import { connect } from 'react-redux'
import { addMessage } from '../actions'
import React, {Component} from 'react'
import '../App.css';
import submit from '../static/mailsend_104372.png'
import geo from "../static/-place_90615.png"
import attach from "../static/attach-rotated_icon-icons.com_68593.png"
import emoji from "../static/mbrismileface_99462.png"

import InputForm from "../components/InputForm"
import ButtonForm from "../components/ButtonForm"
import AttachForm from "../components/AttachForm"

import smile from "../static/slightly-smiling-face.png"
import sad from "../static/slightly-frowning-face.png"

import EmojiBar from "../components/emoji.js"


class InputComponent extends Component { 
  state = {
    value: '',
    isEmoji: false,
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  handleSubmit() {
    this.props.addMessage(this.state.value);
    this.setState({value: ''});
  };

  handleEmoji(event){
    this.setState({value: this.state.value + ":emoji:"});
    this.setState({isEmoji: true});
    console.log(this.state.isEmoji);
  };

  handleEmojiSplit(event){
    
  }

  geoposition() {
    function getPosition (opts) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, opts);
      });
    };
    return getPosition();
  };

  handleGeoposition(event){
    this.geoposition().then((result) => {
      this.setState({value: 'Мои координаты: ' + result.coords.latitude + ', ' + result.coords.longitude});
    })
  };

  readFile(file) {
    let fileReader = new FileReader();

    return new Promise((resolve, reject) => {
        fileReader.onload = e => {
            let dataURI = e.target.result;
            resolve(dataURI);
        }
        fileReader.readAsDataURL(file); 
    })
  }; 

  loadFile(event) {
    return new Promise((resolve, reject) => {
      event.preventDefault();
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.readAsDataURL(file);

      resolve(file.name);
      
    })

  };

  handleFile(event) {
    this.loadFile(event).then((result) => {       
      this.setState({value: result});
    });
        
  }

  render() {
    let input;
    let props;
    return (
      <section id="newMessage">
        {this.state.isEmoji === true ? <EmojiBar/>: <div/>}
        <InputForm value={this.state.value} handleChange={(e) => this.handleChange(e)} />
        <ButtonForm id="emoji" onClick={(e) => this.handleEmoji(e)} src={ emoji } />
        <ButtonForm id="submit" onClick={(e) => this.handleSubmit()} src={ submit } />
        <AttachForm onChange={(e) => this.handleFile(e)} src={ attach }/>
        <ButtonForm id="geo" onClick={(e) => this.handleGeoposition(e)} src={ geo } />
      </section>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addMessage: (message) => dispatch(addMessage(message))
  }
};


const mapStateToProps = state => {
  return {
    msg: state.messages,
  }
}


export const AddMessage = connect(() => ({}), mapDispatchToProps)(InputComponent)
