import axios from "axios";
import { SET_ORG, SET_ERROR } from '../types'

// middleware
export const getOrg = () => async (dispatch, getState) => {
  try {

    const response = await axios.get('http://localhost:3000/organizations')
    const arr = response.data

    let arrNum = arr.map((i) => {
      i.result = i.Raitings.reduce((acc, el) => acc += el.number, 0 ) / i.Raitings.length
      // const post_test = test[test.length]
      return i
    })

    // let startRes = acc / arrNum.length
    // let result = Math.round(acc / arrNum.length)

    // console.log('oranize----', arrNum)
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



// getValue(newValue, id)


// export const getValue = (newValue, id) => ({
//   type: SET_ERROR,
//   payload: {newValue, id}

// })
