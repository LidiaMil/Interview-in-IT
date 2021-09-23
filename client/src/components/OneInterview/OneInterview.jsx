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
        <div className="job-card-header">
          <div class="avatar">
            <img alt={User.firstName} src={User.photo} />
          </div>
        </div>


        <div className="job-content">

          <div className="job-name">
            <div className="job-card-title">{User.firstName}</div>
            <button className="search-buttons job-star" onClick={() => handleFavorite(id)} type="button"> {favorite ? '⭐' : '☆'}</button>

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

