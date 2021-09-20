import { SET_ALLORG } from '../types'

export const orgReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case SET_ALLORG: {
      const { org } = payload
      return org
    }

    default: {
      return state;
    }
  }
}
