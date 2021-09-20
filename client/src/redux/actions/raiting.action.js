import axios from "axios";
import { SET_RAT, SET_ERROR } from '../types'

// middleware
export const getValue = (value, id) => async (dispatch, getState) => {
    
        const response = await axios.post('http://localhost:3000/organizations/rating', {value, id})

        dispatch(setValue(response.data))
      
  
}
// actionCreaters
export const  setValue = (num) => ({
  type: SET_RAT,
  payload: {num},

})

