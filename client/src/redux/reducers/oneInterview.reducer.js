import { SET_ONE } from '../types'

export const oneInterviewReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {

    case SET_ONE: {
      const { oneInterview } = payload
      return oneInterview
    }

    default: {
      return state;
    }
  }

}
