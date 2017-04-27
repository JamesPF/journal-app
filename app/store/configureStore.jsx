const redux = require('redux');
const thunk = require('redux-thunk').default;
// Create vars for separate reducers by requiring reducers/index file

export var configure = () => {
  var reducer = redux.combineReducers({
    // reducers go here
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk);
  ));

  return store;
}
