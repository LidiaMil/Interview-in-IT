import { SET_FILTER } from '../types'

export const filterReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case  SET_FILTER: {
      const { filter } = payload
      return filter
    }

    default: {
      return state;
    }

  }
}
