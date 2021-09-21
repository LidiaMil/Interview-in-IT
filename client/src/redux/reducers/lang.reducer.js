import { SET_ALLLANG } from '../types'

export const langReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {

    case SET_ALLLANG: {
      const { lang } = payload
      return lang
    }

    default: {
      return state;
    }
  }
}
