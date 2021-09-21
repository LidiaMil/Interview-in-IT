import {  SET_ALLLANG } from '../types'
import axios from "axios";

export const getAllLang = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/interview/newLang")
  dispatch(setAllLang(response.data))
}
export const setAllLang = (lang) => ({
  type: SET_ALLLANG,
  payload: { lang },
})
