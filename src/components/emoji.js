import React from 'react';
import styles from '../index.css';

const Emoji = props => {
  return (
    <img className={props.name}/>
  );
}

function EmojiBar(props) {
    return(
        <section>
            <Emoji name='smile-face'/>
            <Emoji name='sad-face'/>
            <Emoji name='surprised-face'/>
            <Emoji name='happy-face'/>
        </section>
    );
}


export default EmojiBar;

