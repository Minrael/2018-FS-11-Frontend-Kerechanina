import * as types from '../actions/ActionTypes';

const messages = (state = [], action) => {
  console.log(action)
  if (action.type === types.ADD_MESSAGE) {
      console.log(state)
      return state.concat([{message: action.message}])
  }
  return state
}

export default messages
