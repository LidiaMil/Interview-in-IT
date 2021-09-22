import {  COUNT_COMMENT } from '../types'

export const commentCountReducer = (state = 0, action) => {
  const { type, payload } = action

  switch (type) {

    case COUNT_COMMENT: {
      const { countComment } = payload
      return countComment
    }

    default: {
      return state;
    }
  }
}
