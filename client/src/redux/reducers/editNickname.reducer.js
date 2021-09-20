import { SET_NICKNAME } from "../types"


export const editNickname = (state = {}, action) => {
  const { type, payload } = action
console.log("===", payload);
  switch (type) {
    case SET_NICKNAME: {
      const { img, nickname } = payload
      return { img, nickname }
    }
    default: {
      return state;
    }
  }
}
