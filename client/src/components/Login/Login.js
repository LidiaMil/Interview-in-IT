import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setAuth } from '../../redux/actions/auth.action'
import ReactDOM from 'react-dom';


function Login(){

  const responseGoogle = (response) => {
    console.log(response);
  }

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
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/auth/login',
    //   data: {
    //     email,
    //     password 
    //   },
    //       withCredentials: true
    // })
    // axios.post('http://localhost:3000/auth/login', {
    //   email,
    //     password 
    // },{
    //   withCredentials: true
    // }
    // )
    axios.post('http://localhost:3000/auth/login', {
      email,
      password
  }, {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  }})
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


<div class="login">
	<h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <input type="email" placeholder="email" autofocus name="email" required onChange={handleChange} value={email}></input>
    <input type="password" placeholder="password" name="password" type="password" required onChange={handleChange} value={password}></input>
        <button type="submit" class="btn btn-primary btn-block btn-large">Войти</button>
        <div className="error">Тут ошибка: {error}</div>
        <Link to="/">Домой</Link>
    </form>
</div>




  )


  }

export default Login
