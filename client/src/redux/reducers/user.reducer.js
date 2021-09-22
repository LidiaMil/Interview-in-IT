import { SET_USER } from '../types'

export const oneUserReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case  SET_USER: {
      const { oneUser } = payload
      return oneUser
    }

    default: {
      return state;
    }

  }
}
