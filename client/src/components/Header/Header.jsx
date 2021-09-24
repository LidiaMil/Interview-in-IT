import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { useRadioGroup } from '@material-ui/core';
export default function Header() {
  const isAuthenticated = useSelector(state => state.isAuntificated)
  const [one_user, setOneuser] = useState({})
  useEffect( async ()=> {
    const id = Number(localStorage.getItem('user_id'))
   await axios.post('http://localhost:3000/auth/one_user', {id})
    .then((response) => {setOneuser(response.data)
    console.log(response.data);
    
    //const our_user = await User.findOne({where: {id:Number(id)}})
    })
  }, [])
  return (
    <div className="header shadow">
      <Link className="logo" to="/">
      <img  src='whale.PNG' alt="" />
        <span>Собеседушки</span>
      </Link>
      <div className="header-menu">
        <a href="/" className="active" >Главная</a>
        <a href="/profile" className="active" >Профиль</a>
        <a href="/newcomment" className="active" >Создать</a>
        {/* <button onClick={() => handleCreate(1)}>Главная</button>
        <button onClick={() => handleCreate(2)}>Профиль</button>
        <button onClick={() => handleCreate(3)}>Создать</button> */}
      </div>
      {!isAuthenticated &&
        <div className="forLogin">
          <button color="inherit"><Link className="nav-link" to="/login">Логин</Link></button>
          <button color="inherit"><Link className="nav-link" to="/registry">Регистрация</Link></button>
        </div>
      }
      {isAuthenticated &&
        <div className="user-settings">
          <div className="dark-light">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
          </div>
          <div className="user-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-square">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
          </div>
          <img className="user-profile" src={one_user.photo} alt="" />
          <div className="user-name">{one_user.firstName} {one_user.lastName}</div>
          <button color="inherit" className="search-buttons" ><Link to="/logout">Выйти</Link></button>
        </div>
      }
    </div>
  );
}
