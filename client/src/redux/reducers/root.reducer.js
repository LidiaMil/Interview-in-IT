import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"
import { questionReducer } from "./question.reducer"
import { auntificatedReducer } from './auntificated.reducer'


export const reducer = combineReducers({
  organization: organizationReducer,
  question:questionReducer,
  isAuntificated: auntificatedReducer
    
})
