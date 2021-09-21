import { SET_IMG, SET_NICKNAME, GET_MY_INTERVIEWS, CLEAR_MY_INTERVIEWS, DELETE_MY_INTERVIEW } from "../types"

//////  IMG  //////
export const setImgProfile = (id) => async (dispatch) => {
  fetch(`http://localhost:3000/edit/${id}`)
    .then(res => res.json())
    // .then(data=>console.log(data.firstName))
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
export const getInterviews = (data) => ({
  type: GET_MY_INTERVIEWS,
  payload: data
})


export const clearMyInterviews = () => ({
  type: CLEAR_MY_INTERVIEWS,
  payload: []
})


export const deleteMyInterview = (id) => (dispatch) => {
  fetch(`http://localhost:3000/edit/interview/${id}`, {
    method: 'DELETE',
  })
    .then(result => console.log(result))
    .then(dispatch(delInterview(id)))

}

export const delInterview = (id) => ({
  type: DELETE_MY_INTERVIEW,
  payload: id
})
