import {  CHANGE_FAVORITE,NEW_FAVORITE } from '../types'
import axios from "axios";

export const changesFavorite = (id) => async (dispatch, getState) => {
  // console.log('1',id)
  const response = await axios.get(`http://localhost:3000/interview/favorite/${id}`)
  dispatch(setChangeFavorite(response.data))
}
export const setChangeFavorite = (changeFavorite) => ({
  type: CHANGE_FAVORITE,
  payload: { changeFavorite }
})

export const newFavorite = (id) => async (dispatch, getState) => {
  // console.log('2',id)
  const response = await axios.patch(`http://localhost:3000/interview/favorite/${id}`)
  dispatch(setNewFavorite(response.data))
}
export const setNewFavorite = (newFavorite) => ({
  type: NEW_FAVORITE,
  payload: { newFavorite }
})
