import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setAuth } from '../../redux/actions/auth.action'

function Login(){

  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const history = useHistory()
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const {email, password} = inputs 

  function handleChange({target: {name, value}}){
    setInputs({
      ...inputs,
      [name]: value,

    })
  }

  async function handleSubmit(event){
    event.preventDefault()
    dispatch(setAuth(email, password))
    history.push('/')
  } 


  return (

<div className="login">
	<h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <input type="email" placeholder="email" autoFocus name="email" required onChange={handleChange} value={email}></input>
    <input type="password" placeholder="password" name="password" type="password" required onChange={handleChange} value={password}></input>
        <button type="submit" className="btn btn-primary btn-block btn-large">Войти</button>
        {error ? <div className="error">Тут ошибка: {error}</div> : <div></div>}
        
         <Link to="/registration">Регистрация</Link> 
    </form>
</div>

  )
  }

export default Login
