import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/root.reducer';
import { initialState } from './state'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


// Store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;
