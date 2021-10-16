import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"
import { interviewReducer } from "./interview.reducer"
import { oneQuestionReducer } from './oneQuest.reducer'
import { commentReducer } from './comment.reducer'
import { categoriesReducer } from './categories.reducer'
import { langReducer } from './lang.reducer'
import { orgReducer } from './org.reducer'
import { myInterviewsReducer } from "./myInterviews.reducer"
import { organizationInterviewReducer } from './organizationInterview.reducer'
import { oneInterviewReducer } from './oneInterview.reducer'
import { changeFavoriteReducer } from './changeFavorite.reducer'
import { myFavoriteInterviewsReducer } from './favoriteInterview.reducer'
import { dataInterviewFormReducer } from "./dataInterviewForm.reducer"
import { commentCountReducer } from './countComment.reducer'
import { filterReducer } from './filter.reducer'
import { commentUserReducer } from './userComment.reducer'
import { commentInfoReducer } from './commentInfo.reducer'
import { fileReducer } from "./file.reducer"
import { userAuthReducer } from "./userauth.reducer"

export const reducer = combineReducers({
  organization: organizationReducer,
  comments: commentReducer,
  interview: interviewReducer,
  oneInterview: oneInterviewReducer,
  categories: categoriesReducer,
  lang: langReducer,
  org: orgReducer,
  oneQuestion: oneQuestionReducer,
  myInterviews: myInterviewsReducer,
  organizationInterview: organizationInterviewReducer,
  changeFavorite: changeFavoriteReducer,
  favInterviews: myFavoriteInterviewsReducer,
  dataInterviewForm: dataInterviewFormReducer,
  countComment: commentCountReducer,
  filter: filterReducer,
  commentUser: commentUserReducer,
  commentInfo: commentInfoReducer,
  user: userAuthReducer,
  files: fileReducer
})
