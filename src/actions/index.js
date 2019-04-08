import * as types from './ActionTypes'

let chatIndex = 0

export const chatList = (chatName, unreads) => ({
  type: types.CHAT_LIST,
  id: chatIndex++,
  chatName,
  unreads 
})

let userIndex = 0

export const user = (userName, isAuth) => ({
  type: types.USER,
  id: userIndex++,
  userName,
  isAuth: true
})

let messageIndex = 1

export const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  id: messageIndex++,
  message
})










