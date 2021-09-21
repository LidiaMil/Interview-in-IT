import { SET_ERROR, SET_ORG, SET_RAT } from '../types'


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
    case SET_RAT: {
      const { value } = payload
      return organization.result = value
  }
      default: {
          return organization;
      }
  }

}
