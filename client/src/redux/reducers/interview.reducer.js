import { SET_QUESTION  } from '../types'

export const interviewReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {

    case SET_QUESTION: {
      const { question } = payload
      return  question 
    }
    default: {
      return state;
    }
  }

}
