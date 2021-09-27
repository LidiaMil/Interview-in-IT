import {  ADD_COMMENT,SET_COMMENT,DEL_COMMENT,EDIT_COMMENT } from '../types'

export const commentReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case SET_COMMENT: {
      const { comments } = payload
      return comments
    }

    case ADD_COMMENT: {
      const { newComment } = payload
      return [...state, newComment]
    }

    case DEL_COMMENT: {
       return payload
    }

    case EDIT_COMMENT: {
      const { changedPost } = payload
      return state.map(el => changedPost.id === el.id ? changedPost : el)
    }

    default: {
      return state;
    }
  }
}
