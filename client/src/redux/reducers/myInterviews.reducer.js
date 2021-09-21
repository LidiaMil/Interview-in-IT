import { CLEAR_MY_INTERVIEWS, GET_MY_INTERVIEWS } from "../types"



export const myInterviewsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_MY_INTERVIEWS: {
      return payload

    }
    case CLEAR_MY_INTERVIEWS: {
      return payload
    }
    default: {
      return state;
    }
  }
}
