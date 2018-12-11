const chats = (state = [{id: 0, chatName: 'chat 1',unreads: 5}], action) => {
  if  (action.type === 'CHAT_LIST') {
      return state.concat([
        {
          id: action.id,
          chatName: action.chatName,
          unread: action.unreads
        }
      ])
  }
	return state
}

export default chats
