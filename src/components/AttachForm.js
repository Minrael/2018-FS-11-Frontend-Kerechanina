import React from 'react'
import { withRouter } from 'react-router-dom'


const AttachForm = (props) => {
    return (
        <section>
        <button>
          <label htmlFor="attach" className="Button">
            <img alt="" id="Button" src={ props.src }></img>
          </label>
        </button>
        <input type="file"  id="attach" style={{display: 'none'}} onChange={props.onChange}/>
        </section>
    )
};


export default withRouter(AttachForm)