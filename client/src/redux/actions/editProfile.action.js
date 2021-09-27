import { SET_USER_DATA, GET_MY_INTERVIEWS, CLEAR_MY_INTERVIEWS, DELETE_MY_INTERVIEW, GET_MY_INTERVIEW_FOR_FORM,GET_MY_FAV_INTERVIEWS } from "../types"
import axios from "axios";


/////////  NICKNAME  ////////
export const setProfileData = (formData) => (dispatch) => {

  fetch("http://localhost:3000/edit/upload", {
    method: 'POST',
    body: formData,
  }).then(result => result.json())
    .then(data => dispatch(setUserData(data.firstName, data.photo)))
}
export const setUserData = (nickname, photo) => ({
  type: SET_USER_DATA,
  payload: { nickname, photo }
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
export const getMyFavoriteInterviews = ()=> async (dispatch, getState) => {
  const response = await axios.get(`http://localhost:3000/interview/favorite`)
  // console.log(response.data)
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
    // .then(result => console.log(result))
    .then(dispatch(delInterview(id)))

}
export const delInterview = (id) => ({
  type: DELETE_MY_INTERVIEW,
  payload: id
})



export const editMyInterview = (id) => (dispatch) => {
  fetch(`http://localhost:3000/edit/datainterview/${id}`)
    .then(result => console.log(result))
    .then(data=>dispatch(editInterview(data)))

}
export const editInterview = (data) => ({
  type: GET_MY_INTERVIEW_FOR_FORM,
  payload: data
})


