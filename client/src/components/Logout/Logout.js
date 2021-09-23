import React, {useEffect, useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setUndoAuth} from '../../redux/actions/auth.action'

function Logout(){
  const dispatch = useDispatch()
 const history = useHistory()
  useEffect(() => {
    (async () => {
     await fetch('/auth/logout')  
     dispatch(setUndoAuth())
     localStorage.removeItem('user_id')
//  dispatch({
//     type: 'LOGOUT'
//   })
  history.push('/')


    })()


  })
  return (
    <>Идет логаут...</>

  )


  }

export default Logout
