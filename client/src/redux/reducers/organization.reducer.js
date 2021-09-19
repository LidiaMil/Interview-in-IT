import { SET_ERROR, SET_ORG } from '../types'


export const organizationReducer = (organization = [], action) => {
  const { type, payload, error} = action

  switch (type) {
      case SET_ERROR: {
          return { organization , isLoading: false, error }
      }
      case SET_ORG: {
        const { organization } = payload
        return organization 
    }
      default: {
          return organization;
      }
  }

}
