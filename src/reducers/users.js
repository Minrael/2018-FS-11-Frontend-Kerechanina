import * as types from '../actions/ActionTypes'

const users = (state = [{id: 0, userName: 'Theodore',isAuth: true}], action) => {

  if (action.type === types.USER) {
      return state.concat([
      {
      		id: action.id,
      		userName: action.userName,
  		isAuth: action.isAuth
      }])
      
  }
	return state
}

export default users
