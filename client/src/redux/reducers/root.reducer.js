import { combineReducers } from "redux"
import { organizationReducer } from "./organization.reducer"
import { interviewReducer } from "./interview.reducer"
import { auntificatedReducer } from './auntificated.reducer'
import { oneQuestionReducer } from './oneQuest.reducer'
import { commentReducer } from './comment.reducer'
import { categoriesReducer } from './categories.reducer'
import { langReducer } from './lang.reducer'
import { orgReducer } from './org.reducer'
import { editImg } from "./editImg.reducer"
import { editNickname } from "./editNickname.reducer"
import { myInterviewsReducer } from "./myInterviews.reducer"
import {organizationInterviewReducer} from './organizationInterview.reducer'
import {oneInterviewReducer} from './oneInterview.reducer'
import {oneUserReducer} from './user.reducer'
import {changeFavoriteReducer} from './changeFavorite.reducer'
import {myFavoriteInterviewsReducer} from './favoriteInterview.reducer'
import { dataInterviewFormReducer } from "./dataInterviewForm.reducer"

export const reducer = combineReducers({
  organization: organizationReducer,
  comments: commentReducer,
  interview: interviewReducer,
  oneInterview: oneInterviewReducer,
  isAuntificated: auntificatedReducer,
  categories: categoriesReducer,
  lang: langReducer,
  org: orgReducer,
  oneQuestion: oneQuestionReducer,
  img: editImg,
  nickname: editNickname,
  myInterviews: myInterviewsReducer,
  organizationInterview: organizationInterviewReducer,
  oneUser:oneUserReducer,
  changeFavorite:changeFavoriteReducer,
  favInterviews:myFavoriteInterviewsReducer,
  dataInterviewForm: dataInterviewFormReducer,
})
