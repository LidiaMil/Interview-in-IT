import { SET_ALLCATEGOREY } from '../types'

export const categoriesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case SET_ALLCATEGOREY: {
      const { categories } = payload
      return categories
    }

    default: {
      return state;
    }
  }
}
