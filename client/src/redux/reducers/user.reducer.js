import { SET_USER, SET_USER_DATA, SET_IMG } from '../types'

export const oneUserReducer = (state = [], action) => {
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
    case  SET_USER: {
      const { oneUser } = payload
      return oneUser
    }

    default: {
      return state;
    }

  }
}
