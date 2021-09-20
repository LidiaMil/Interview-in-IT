import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"
import { interviewReducer } from "./interview.reducer"
import { auntificatedReducer } from './auntificated.reducer'
import { oneQuestionReducer } from './oneQuest.reducer'
import { commentReducer } from './comment.reducer'
import { editImg } from "./editImg.reducer"
import { editNickname } from "./editNickname.reducer"
import { myInterviewsReducer } from "./myInterviews.reducer"

export const reducer = combineReducers({
  organization: organizationReducer,
  comments: commentReducer,
  interview: interviewReducer,
  isAuntificated: auntificatedReducer,
  oneQuestion: oneQuestionReducer,
  img: editImg,
  nickname: editNickname,
  myInterviews: myInterviewsReducer
})
