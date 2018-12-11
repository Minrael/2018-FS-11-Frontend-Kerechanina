import * as types from './ActionTypes'

let chatIndex = 0

export const chatList = (chatName, unreads) => ({
  type: types.CHAT_LIST,
  id: chatIndex + 1,
  chatName,
  unreads 
})

let userIndex = 0

export const user = (userName, isAuth) => ({
  type: types.USER,
  id: userIndex + 1,
  userName,
  isAuth
})

let messageIndex = 0

export const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  id: messageIndex + 1,
  message
})







