import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import Question from '../Question/Question';
import { changesFavorite, newFavorite } from '../../redux/actions/changeFavorite.action'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export default function ComplexGrid({ id, data, name, description, level, Questions, Categorey, User, Organizations, favorites }) {
  const [favorite, setFavorite] = useState(favorites)
  let history = useHistory();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.isAuntificated)

  let arrOrg = []
  if (Organizations.length) {
    for (let i = 0; i < Organizations.length; i++) {
      arrOrg.push(Organizations[i].title)
    }
  }

  const handleFavorite = (id) => {
    if (isAuthenticated) {
      dispatch(newFavorite(id))
      setFavorite(!favorite)
    }
    else {
      history.push("/login")
    }
  }

  return (

    User && Categorey && <div className="job-card shadow border-radius">

      <div className="job-main">
        <div className="job-card-header avatar">
          {User.photo ?
            <img alt={User.firstName} src={User.photo} />
            :
            <img src="https://avatarko.ru/img/kartinka/1/panda_Pooh.jpg" alt="Avatar"  />
          }
        </div>


        <div className="job-content">

          <div className="job-name">
            <div className="job-card-title">{User.firstName}</div>
            <button className="classStar" onClick={() => handleFavorite(id)} type="button"> {favorite ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>}</button>            {/* <button className="purchase__button" onClick={() => handleFavorite(id)} type="button"> {favorite ? '⭐' : '☆'}</button> */}

          </div>
          <div className="job-card-subtitle">
            Должность: {name}     </div>
          <div className="job-card-subtitle">
            Описание: {description}      </div>
          <div className="job-detail-buttons">
            <button className="search-buttons detail-button"> Организация: {arrOrg.join(' ')}</button>
            <button className="search-buttons detail-button"> Категория: {Categorey.categorey}</button>
            <button className="search-buttons detail-button">  Позиция: {level}</button>
          </div>
        </div>

      </div>

      <div className="job-card-buttons">
        <form action={`/interview/${id}`} >
          <button className="search-buttons card-buttons">Больше</button>
        </form>

      </div>
    </div>




  );
}

