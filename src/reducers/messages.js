import * as types from '../actions/ActionTypes'


const messages = (state = [], action) => {
  console.log(action.message)
  if (action.type === types.ADD_MESSAGE) {
      return state.concat([{message: action.message}])
  }
  return state
}

export default messages
