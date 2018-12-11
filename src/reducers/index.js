
import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import chats from './chats'


const chat = combineReducers({
  chats,
  messages,
  users
})




export default chat



















/*const initialState = {
  text: 'I am a initial message',
}

const reducer (store = initialState, action) => {
	if (action.type === 'NEW_MESSAGE'){
	    return {
		text: 'I am a new message'
	    }
	}
	return store
};

export default reducer;*/



























/*import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import chats from './chats'


const chat = combineReducers({
  chats,
  messages,
  users
})




export default chat*/
