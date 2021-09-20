import axios from "axios";
import { SET_ORG, SET_ERROR,SET_ALLORG } from '../types'

export const getAllOrg = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/interview/newOrg")
  dispatch(setAllOrg(response.data))
}
export const setAllOrg = (lang) => ({
  type: SET_ALLORG,
  payload: { lang },
})

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

