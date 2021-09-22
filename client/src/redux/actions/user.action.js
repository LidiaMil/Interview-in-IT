import axios from "axios";
import { SET_USER } from '../types'

export const getUser = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3000/interview/user/${id}`)
  dispatch(setUser(response.data))
}

export const setUser = (oneUser) => ({
type: SET_USER,
payload: {oneUser}, 
})
