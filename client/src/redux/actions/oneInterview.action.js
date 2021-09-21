import axios from "axios";
import { SET_ONE } from '../types'

export const getOneInterview = (id) => async (dispatch) => {
  console.log("looool",id)
  const response = await axios.get(`http://localhost:3000/interview/${id}`)
  dispatch(setOneInterview(response.data))
}
export const setOneInterview = (oneInterview) => ({
  type: SET_ONE,
  payload: { oneInterview }
})
