import { SET_QUESTION ,ADD_INTERVIEW } from '../types'

export const interviewReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {

    case SET_QUESTION: {
      const { question } = payload
      return  question 
    }
    case ADD_INTERVIEW: {
      const { newInterview } = payload
      return [...state, newInterview]
    }
    default: {
      return state;
    }
  }

}
