import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"
import { auntificatedReducer } from './auntificated.reducer'


export const reducer = combineReducers({
  organization: organizationReducer,
  isAuntificated: auntificatedReducer
    
})
