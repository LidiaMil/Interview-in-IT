import axios from "axios";
import { SET_QUESTION } from '../types'

export const getInterview = () => async (dispatch, getState) => {
  const response = await axios.get("http://localhost:3000/interview")
  dispatch(setInterview(response.data))

}

export const setInterview = (question) => ({
  type: SET_QUESTION,
  payload: { question }
})


