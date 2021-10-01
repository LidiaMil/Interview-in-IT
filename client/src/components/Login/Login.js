import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setAuth } from '../../redux/actions/auth.action'
import ReactDOM from 'react-dom';


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
  }
  , {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  }}
  )
      .then((data) => {
        //console.log('fdfdfdfd=====>', data);
        dispatch(setAuth())

        localStorage.setItem('user_id', data.data.id);
        history.push('/')
      }
      )
      .catch(() => setError('Повторите вход'))
  } 




  const {email, password} = inputs 



  return (


<div className="login">
	<h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <input type="email" placeholder="email" autofocus name="email" required onChange={handleChange} value={email}></input>
    <input type="password" placeholder="password" name="password" type="password" required onChange={handleChange} value={password}></input>
        <button type="submit" className="btn btn-primary btn-block btn-large">Войти</button>
        {error ? <div className="error">Тут ошибка: {error}</div> : <div></div>}
        
         <Link to="/registry">Регистрация</Link> 
    </form>
</div>




  )


  }

export default Login
