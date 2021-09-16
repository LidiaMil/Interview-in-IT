import axios from "axios";
import { SET_QUESTION } from '../types'

export const getQuestion = () => async (dispatch, getState) => {
  const response = await axios.get("http://localhost:3000/question")
  dispatch(setQuestion(response.data))

}

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  payload: { question }
})


