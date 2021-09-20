import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/root.reducer';
import { initialState } from './state'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


// Store
const preloadedState = window.localStorage.getItem('state') || '{"isAuthenticated": false}'
console.log('teeest', preloadedState);
// Store
const store = createStore(reducer, JSON.parse(preloadedState), composeWithDevTools(applyMiddleware(thunk)))


export default store;
