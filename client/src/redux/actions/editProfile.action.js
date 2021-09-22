import { SET_IMG, SET_NICKNAME, GET_MY_INTERVIEWS,GET_MY_FAV_INTERVIEWS } from "../types"
import axios from "axios";


//////  IMG  //////
export const setImgProfile = (id) => async (dispatch) => {
  fetch(`http://localhost:3000/edit/${id}`)
    .then(res => res.json())
    .then(data => dispatch(setImg(data.photo, data.firstName)))
}
export const setImg = (img, nickname) => ({
  type: SET_IMG,
  payload: { img, nickname }
})


/////////  NICKNAME  ////////
export const setNicknameProfile = (formData) => (dispatch) => {

  fetch("http://localhost:3000/edit/upload", {
    method: 'POST',
    body: formData,
  }).then(result => result.json())
    .then(data => dispatch(setNickname(data.firstName, data.photo)))
  // .then(data=>console.log(data.firstName, data.photo))
  //   .then(result => {
  //     const { img, nickname, status } = result
  //     setNickname(nickname)
  //   })
  // } else {
  //   alert("нет никнейма")
  // }
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
export const getInterviews = (myInterviews) => ({
  type: GET_MY_INTERVIEWS,
  payload: { myInterviews }
})


//favorite
export const getMyFavoriteInterviews = ()=> async (dispatch, getState) => {
  const response = await axios.get(`http://localhost:3000/interview/favorite`)
  dispatch(getFavoriteInterviews(response.data))
}
export const getFavoriteInterviews = (favInterviews) => ({
  type: GET_MY_FAV_INTERVIEWS,
  payload: { favInterviews }
})

