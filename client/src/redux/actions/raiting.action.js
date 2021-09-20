import axios from "axios";
import { SET_ORG, SET_ERROR, SET_RAT } from '../types'

// middleware
export const getValue = (value, id) => async (dispatch, getState) => {
    
        const response = await axios.post('http://localhost:3000/organizations/rating', {value, id})


        dispatch(setValue(response.data))
      
  
}
// actionCreaters
export const  setValue = (value) => ({
  type: SET_RAT,
  payload: {value},

})

