import { ADD_COMMENT,SET_COMMENT,DEL_COMMENT,EDIT_COMMENT, COUNT_COMMENT} from '../types'
import axios from "axios";

//GET COMMENT
export const getComment = (postId) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3000/interview/comment/${postId}`)
  dispatch(setComment(response.data.Comments))
}
export const setComment = (comments)=>({
  type:SET_COMMENT,
  payload: {comments}, 
})

//ADD COMMENT
export const addComment = (postId,idUser,newCom) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3000/interview/comment/${postId}/${idUser}`,newCom)
  console.log(response.data)
  dispatch(setAddComment(response.data))
}
export const setAddComment = (newComment)=> ({
  type: ADD_COMMENT,
  payload: {newComment},
})

//DELETE COMMENT
export const deleteComment = (post,id) => async (dispatch) => {
  const response = await axios.delete(`http://localhost:3000/interview/comment/${id}/${post}`)
  console.log(response.data,"+-+-")
  dispatch(setdeleteComment(response.data))
}
export const setdeleteComment = (id)=> ({
  type:DEL_COMMENT,
  payload: id,
})

//EDIT COMMENT
export const editComment = (postId,id,editCom) => async (dispatch) => {
  const response = await axios.post( `http://localhost:3001/interview/comment/${postId}/${id}`,editCom)
  dispatch(seteditComment(response.data))
}
export const seteditComment = (changedPost)=> ({
  type:EDIT_COMMENT,
  payload: {changedPost},
})

//COUNT COMMENT
export const countCommentQuestion = (postId) => async (dispatch) => {
  const response = await axios.patch( `http://localhost:3000/interview/comment/${postId}`)
  dispatch(setcountCommentQuestion(response.data))
}
export const setcountCommentQuestion = (countComment)=> ({
  type:COUNT_COMMENT,
  payload: {countComment},
})
