import { connect } from 'react-redux'
import React from 'react'
import Message from '../components/Message'

const MessagesListComponent = ({ messages, chatid }) => (
  <div>
    <p>Hello, friend!</p>
      {messages.map(message => (<Message key={message.id} {...message} />))}
  </div>
)

export const MessagesList = connect((state, props) => ({
  messages: state.messages,
  chatid: props.chatid
}), {})(MessagesListComponent)
