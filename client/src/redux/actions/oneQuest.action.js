import axios from "axios";
import { SET_ONEQUEST } from '../types'

export const getOneQuestion = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3000/interview/question/${id}`)
  dispatch(setOneQuestion(response.data))
}

export const setOneQuestion = (oneQuestion) => ({
type: SET_ONEQUEST,
payload: {oneQuestion}, 
})
