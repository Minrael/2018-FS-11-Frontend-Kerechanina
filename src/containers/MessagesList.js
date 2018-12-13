import { connect } from 'react-redux'
import React from 'react'
import Message from '../components/Message'

const MessagesListComponent = ({ messages, chatid }) => (
  <div id = "messagesList">
    <div id = "chat_id"> {chatid} </div>
    <p id = "friend_message">Hello, friend!</p>
      {messages.map(message => (<Message key={message.id} message={message.message} />))}
  </div>
)

export const MessagesList = connect((state, props) => ({
  messages: state.messages,
  chatid: props.chatid
}), {})(MessagesListComponent)
