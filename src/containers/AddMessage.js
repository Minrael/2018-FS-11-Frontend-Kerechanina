import { connect } from 'react-redux'
import { addMessage } from '../actions'
import React from 'react'
import '../App.css';


const InputComponent = (props) => {
  let input;

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter' & input.value !== '') {
          props.dispatch(input.value);
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatch: (message) => {
    dispatch(addMessage(message))
  }
})


export const AddMessage = connect(() => ({}), mapDispatchToProps)(InputComponent)
