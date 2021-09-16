import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"
import { questionReducer } from "./question.reducer"


export const reducer = combineReducers({
  organization: organizationReducer,
  question:questionReducer,
})
