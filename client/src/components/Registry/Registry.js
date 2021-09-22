import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setAuth } from '../../redux/actions/auth.action'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


function Registry(){

  const history = useHistory()

  function handleSubmit(event){
  
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))

    axios.post('http://localhost:3000/auth/registry', {
      firstName: input_data.firstName ,
      lastName: input_data.lastName,
      email: input_data.email,
      password: input_data.password
  }).then(()=> history.push('/'))

  }
                               
  
  return (


<div class="login">
	<h1>Регистрация пользователя</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Имя" autofocus name="firstName" ></input>
    <input type="text" placeholder="Фамилия"  name="lastName" ></input>
    <input type="email" placeholder="email"  name="email" ></input>
    <input type="password" placeholder="password" name="password" type="password"></input>
    <button type="submit" class="btn btn-primary btn-block btn-large">Подтвердить</button> 
    </form>
</div> 

  )

  }

export default Registry
