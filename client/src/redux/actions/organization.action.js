import axios from "axios";
import { SET_ORG, SET_ERROR } from '../types'

// middleware
export const getOrg = () => async (dispatch, getState) => {
    try {

        const response = await axios.get('http://localhost:3000/organizations')

        dispatch(setOrganizations(response.data))
      
    } catch (error) {
        dispatch(setError(error))
    }
}
// actionCreaters
export const  setOrganizations = (organization) => ({
  type: SET_ORG,
  payload: {organization},

})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
