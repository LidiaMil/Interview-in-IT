import { SET_QUESTION,SET_LOADING,SET_ERROR  } from '../types'

export const questionReducer = (state = [], action) => {
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
