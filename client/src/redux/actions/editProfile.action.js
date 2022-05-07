import {
  SET_IMG, SET_NICKNAME, GET_MY_INTERVIEWS, CLEAR_MY_INTERVIEWS,
  DELETE_MY_INTERVIEW, GET_MY_INTERVIEW_FOR_FORM, GET_MY_FAV_INTERVIEWS
} from "../types"
import axios from "axios";
import { setImg } from "../reducers/userauth.reducer";

/////////  NICKNAME  ////////
export const setNicknameProfile = (formData) => (dispatch) => {
  fetch("http://localhost:3000/edit/upload", {
    method: 'POST',
    body: formData,
  }).then(result => result.json())
    .then(data => dispatch(setImg(data.firstName, data.photo)))
}
export const setNickname = (nickname, img) => ({
  type: SET_NICKNAME,
  payload: { nickname, img }
})

/////// INTERVIEWS  ////////

export const getMyInterviews = (id) => (dispatch) => {
  fetch(`http://localhost:3000/edit/getusersposts/${id}`)
    .then(result => result.json())
    .then(data => dispatch(getInterviews(data)))
}
export const getInterviews = (data) => ({
  type: GET_MY_INTERVIEWS,
  payload: data
})


//favorite
export const getMyFavoriteInterviews = () => async (dispatch, getState) => {
  const response = await axios.get(`http://localhost:3000/interview/favorite`)
  dispatch(getFavoriteInterviews(response.data))
}
export const getFavoriteInterviews = (favInterviews) => ({
  type: GET_MY_FAV_INTERVIEWS,
  payload: { favInterviews }
})

export const clearMyInterviews = () => ({
  type: CLEAR_MY_INTERVIEWS,
  payload: []
})


export const deleteMyInterview = (id) => (dispatch) => {
  fetch(`http://localhost:3000/edit/interview/${id}`, {
    method: 'DELETE',
  })
    .then(dispatch(delInterview(id)))

}
export const delInterview = (id) => ({
  type: DELETE_MY_INTERVIEW,
  payload: id
})



export const editMyInterview = (id) => (dispatch) => {
  fetch(`http://localhost:3000/edit/datainterview/${id}`)
    .then(data => dispatch(editInterview(data)))

}
export const editInterview = (data) => ({
  type: GET_MY_INTERVIEW_FOR_FORM,
  payload: data
})
