import {  COUNT_COMMENT } from '../types'

export const commentCountReducer = (state = [], action) => {
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
