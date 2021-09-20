import axios from "axios";
import { SET_ALLORG } from '../types'

export const getAllOrg = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/interview/newOrg")
  console.log(response.data)
  dispatch(setAllOrg(response.data))
}
export const setAllOrg = (org) => ({
  type: SET_ALLORG,
  payload: { org },
})
