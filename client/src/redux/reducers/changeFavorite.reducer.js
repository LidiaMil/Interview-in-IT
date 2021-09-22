import {  CHANGE_FAVORITE,NEW_FAVORITE } from '../types'

export const changeFavoriteReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {

    case CHANGE_FAVORITE: {
      const { changeFavorite } = payload
      return  changeFavorite
    }

    case NEW_FAVORITE : {
      const { newFavorite } = payload
      return  newFavorite
    }

    default: {
      return state;
    }
  }

}
