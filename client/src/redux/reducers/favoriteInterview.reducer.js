import {GET_MY_FAV_INTERVIEWS} from "../types"


export const myFavoriteInterviewsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_MY_FAV_INTERVIEWS: {
      const { favInterviews } = payload
      return favInterviews 
    } default: {
      return state;
    }
  }
}
