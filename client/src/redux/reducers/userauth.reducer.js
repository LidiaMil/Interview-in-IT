//import { SET_QUESTION ,ADD_INTERVIEW ,SET_ONE} from '../types'

const SET_USER = "SET_USER_AU"
const LOGOUT = "LOGOUT"
const SETIMG = "SETIMG"

const defaultState = {
  currentUser: {},
  isAuth: false
}

export const userAuthReducer = (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER: 
      return {...state, currentUser: payload, isAuth: true}
    case LOGOUT: 
    localStorage.removeItem('token')
      return {...state, currentUser: {}, isAuth: false}
    case SETIMG:
      return {...state, currentUser: {...state.currentUser, photo: payload.img, firstName: payload.firstName}}



  default:
      return state


}
}


export const setUser = user => ({type: SET_USER, payload: user})
//export const setUser = user => (console.log('halalhala', user, SET_USER))
export const logout = () => ({type: LOGOUT})

export const setImg = (firstName, img) => ({type: SETIMG, payload: { firstName, img }})
