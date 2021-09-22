import axios from "axios";
import { SET_QUESTION,ADD_INTERVIEW,CHANGE_FAVORITE} from '../types'

export const getInterview = () => async (dispatch, getState) => {
  console.log('12323')
  const response = await axios.get("http://localhost:3000/interview")
  dispatch(setInterview(response.data))
}
export const setInterview = (question) => ({
  type: SET_QUESTION,
  payload: { question }
})



export const addInterview = (newCom) => async (dispatch, getState) => {
  const response = await axios.post(`http://localhost:3000/interview/new`,newCom)
  dispatch(setAddInterview(response.data))
}
export const setAddInterview = (newInterview) => ({
  type: ADD_INTERVIEW,
  payload: { newInterview }
})
