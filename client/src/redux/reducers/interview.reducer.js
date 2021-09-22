import { SET_QUESTION ,ADD_INTERVIEW ,SET_ONE} from '../types'

export const interviewReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {

    case SET_QUESTION: {
      const { question } = payload
      return  question 
    }
    case SET_ONE: {
      const {oneInterview}=payload
      return oneInterview

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
