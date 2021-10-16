import axios from 'axios'
import { setUser } from '../reducers/userauth.reducer'

export const setAuth = (email, password) => {

  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password
      }
      )
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
    }
  }
}

export const Auth = () => {

  return async dispatch => {
    try {

      const response = await axios.get('http://localhost:3000/auth/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      )
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      localStorage.removeItem('token')

    }
  }
}

