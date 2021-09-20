import { SET_IMG } from "../types"


export const editImg = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_IMG: {
      const { img, nickname } = payload
      return { img, nickname }
    }
    default: {
      return state;
    }
  }
}
