import { CLEAR_MY_INTERVIEWS, DELETE_MY_INTERVIEW, GET_MY_INTERVIEWS } from "../types"



export const myInterviewsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_MY_INTERVIEWS: {
      return payload

    }
    case CLEAR_MY_INTERVIEWS: {
      return payload
    }
    case DELETE_MY_INTERVIEW: {
      return state.filter(e => e.id !== payload)

    }
    default: {
      return state;
    }
  }
}
