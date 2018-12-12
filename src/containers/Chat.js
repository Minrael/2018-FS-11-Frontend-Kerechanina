import { connect } from 'react-redux'
import React, { Component } from 'react'
import { AddMessage } from './AddMessage'
import { MessagesList } from './MessagesList'


const ChatComponent = () => (
	<div>		
		<MessagesList/>
		<AddMessage />
	</div>
)

export const Chat = connect((state, props) => ({
  messages: state.messages,
  chatid: props.chatid
}), {})(ChatComponent)
