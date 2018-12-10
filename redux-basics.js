const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0,
}


// Reducer
const reducer = (store = initialState, action) => {
	if(action.type === 'INC_COUNTER	') {
	  return {
		counter: store.counter + 1
	  }
	}
	if(action.type === 'ADD_COUNTER	') {
	  return {
		counter: store.counter + action.value
	  }
	}
	if(action.type === 'MAKE_BULLSHIT') {
	  return {
		counter: 'Bullshit'
	  }
	}
	return store
};

//Store
const store = createStore(reducer);
console.log('state before ->', store.getState());


//Action

store.dispatch({
  type: 'INC_COUNTER'
});
store.dispatch({
  type: 'ADD_COUNTER',
  value: 5
  /*payload: {
    value: 5,
    id: 123,
    text: 'text',
    boolParam: false
  }*/
});
store.dispatch({
  type: 'MAKE_BULLSHIT'
});

console.log('state after ->', store.getState());

//Subscription
