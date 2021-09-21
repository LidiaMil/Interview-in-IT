import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
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

  function handleChange({target: {name, value}}){
    setInputs({
      ...inputs,
      [name]: value,

    })
  }

  async function handleSubmit(event){
    event.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/login',
      data: {
        email,
        password 
      }
    })
      .then((data) => {
        console.log(data);
        dispatch(setAuth())
        history.push('/')
        
      }
      )
      .catch(() => setError('Повторите вход'))
  } 




  const {email, password} = inputs 



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input name="email" type="email" required onChange={handleChange} value={email}></input>
      </label>
      <label>
        Password:
        <input name="password" type="password" required onChange={handleChange} value={password}></input>
      </label>
      <button type ="submit">Signin</button>
      <div className="error">Тут ошибка: {error}</div>
      <Link to="/">Домой</Link>
    </form>


  )


  }

export default Login
