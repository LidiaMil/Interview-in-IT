import { SET_ORGINT } from '../types'

export const organizationInterviewReducer = (organizationInterview = [], action) => {
  const { type, payload } = action

  switch (type) {

    case  SET_ORGINT: {
      const { organizationInterview } = payload
      return organizationInterview
    }

    default: {
      return organizationInterview;
    }

  }
}
