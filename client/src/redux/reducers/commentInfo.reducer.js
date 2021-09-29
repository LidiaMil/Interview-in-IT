import { SET_COMMENTINFO } from '../types'

export const commentInfoReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case  SET_COMMENTINFO: {
      const { commentInfo } = payload
      return [...state, commentInfo]
    }

    default: {
      return state;
    }

  }
}
