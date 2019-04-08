import React from 'react'
import { withRouter } from 'react-router-dom'


const InputForm = (props) => {
    return (
        <input value={props.value} onChange={props.handleChange} type="text" placeholder = "Cообщение"/>
    )
};


export default withRouter(InputForm)