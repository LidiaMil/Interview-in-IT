import { GET_MY_INTERVIEWS } from "../types"



export const myInterviewsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_MY_INTERVIEWS: {
      const { myInterviews } = payload
      return { myInterviews }
    } default: {
      return state;
    }
  }
}
