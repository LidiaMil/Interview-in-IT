import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"


export const reducer = combineReducers({
  organization: organizationReducer,
    
})
