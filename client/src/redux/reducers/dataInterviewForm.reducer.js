import { GET_MY_INTERVIEW_FOR_FORM } from "../types"


export const dataInterviewFormReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_MY_INTERVIEW_FOR_FORM: {
      const { data } = payload
      return { data }
    }
    default: {
      return state;
    }
  }
}
