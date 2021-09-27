import axios from "axios";
import { SET_ORG, SET_ERROR } from '../types'


// middleware
export const getOrg = () => async (dispatch, getState) => {
  try {
    const response = await axios.get('http://localhost:3000/organizations')
    const arr = response.data
    console.log('qwwqwqwq',arr)
    let arrNum = arr.map((i) => {
      if(i==0){
        return 1
      }
      i.result = i.Raitings.reduce((acc, el) => acc += el.number, 0 ) / i.Raitings.length
      return i
    })

    dispatch(setOrganizations(arrNum))

  } catch (error) {
    dispatch(setError(error))
  }
}
// actionCreaters
export const setOrganizations = (organization) => ({
  type: SET_ORG,
  payload: { organization },

})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})


