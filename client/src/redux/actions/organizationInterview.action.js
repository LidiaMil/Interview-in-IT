import axios from "axios";
import { SET_ORGINT, SET_ERROR } from '../types'

// middleware
export const getOrganizationInterview = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`http://localhost:3000/organizations/${id}`)
        dispatch(setOrganizationsInterview (response.data))
      
    } catch (error) {
        dispatch(setError(error))
    }
}
// actionCreaters
export const  setOrganizationsInterview  = (organizationInterview) => ({
  type: SET_ORGINT,
  payload: {organizationInterview},

})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
