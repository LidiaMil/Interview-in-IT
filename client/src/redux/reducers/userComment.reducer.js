import { SET_COMMENTUSER, SET_USER_DATA, SET_IMG } from '../types'

export const commentUserReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SET_USER_DATA: {
      const {  nickname } = payload
      return { ...state, firstName: nickname }
    }
    case SET_IMG: {
      const { img } = payload
      return {...state, photo: img} 
    }
    case  SET_COMMENTUSER: {
      const { commentUser } = payload
      return commentUser
    }

    default: {
      return state;
    }

  }
}
