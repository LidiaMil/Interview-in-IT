import {  SET_ALLCATEGOREY } from '../types'
import axios from "axios";

export const getAllCategorey = () => async (dispatch) => {
  console.log("looool")
  const response = await axios.get("http://localhost:3000/interview/new")
  dispatch(setAllCategorey(response.data))
}
export const setAllCategorey = (categories) => ({
  type: SET_ALLCATEGOREY,
  payload: { categories },
})
