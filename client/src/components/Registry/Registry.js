import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setAuth } from '../../redux/actions/auth.action'


function Registry(){

  const history = useHistory()
  const dispatch = useDispatch()

  function handleSubmit(event){
  
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))

    try{
        axios.post('http://localhost:3000/auth/registration', {
        firstName: input_data.firstName ,
        lastName: input_data.lastName,
        email: input_data.email,
        password: input_data.password
    }).then((response)=> 
    {

      //удалить эту логику кроме push
      dispatch(setAuth())
      localStorage.setItem('user_id', response.data.id);
      history.push('/')
  
    })

    } catch(e){
      alert(e.response.data.message)
    }
   
  
  

  }
                               
  
  return (


<div className="login">
	<h1>Регистрация пользователя</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Имя" autofocus name="firstName" ></input>
    <input type="text" placeholder="Фамилия"  name="lastName" ></input>
    <input type="email" placeholder="email"  name="email" ></input>
    <input type="password" placeholder="password" name="password" type="password"></input>
    <button type="submit" className="btn btn-primary btn-block btn-large">Подтвердить</button> 
    </form>
</div> 

  )

  }

export default Registry
