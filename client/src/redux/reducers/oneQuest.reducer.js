import { SET_ONEQUEST } from '../types'

export const oneQuestionReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case  SET_ONEQUEST: {
      const { oneQuestion } = payload
      return oneQuestion
    }

    default: {
      return state;
    }

  }
}
