import React from 'react'
import { withRouter } from 'react-router-dom'


const ButtonForm = (props) => {
    return (
        <button id={props.id} onClick={props.onClick}>
          <img alt="" className="Button" src={props.src}></img>
        </button>
    )
};


export default withRouter(ButtonForm)