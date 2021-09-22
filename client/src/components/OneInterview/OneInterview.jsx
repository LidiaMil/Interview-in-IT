import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import Question from '../Question/Question';
import { changesFavorite, newFavorite } from '../../redux/actions/changeFavorite.action'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"




export default function ComplexGrid({ id, data, name, description, level, Questions, Categorey, User, Organizations, favorites }) {
  const [favorite, setFavorite] = useState(favorites)
  const dispatch = useDispatch()

  let arrOrg = []
  if (Organizations.length) {
    for (let i = 0; i < Organizations.length; i++) {
      arrOrg.push(Organizations[i].title)
    }
  }

  const handleFavorite = (id) => {
    dispatch(newFavorite(id))
    setFavorite(!favorite)
  }

  return (
    <div>
      {User && Categorey && <div className="job-card">
        <div className="job-card-header">
          <img alt={User.firstName} class="avatar" src={User.photo} />
          <button className="search-buttons " onClick={() => handleFavorite(id)} type="button"> {favorite ? '⭐' : '☆'}</button>
          <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z"></path></svg>
        </div>
        <div className="job-card-title">{User.firstName}</div>
        <div className="job-card-subtitle">
          Должность: {name}     </div>
        <div className="job-card-subtitle">
          Описание: {description}      </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button"> Организация: {arrOrg.join(' ')}</button>
          <button className="search-buttons detail-button"> Категория: {Categorey.categorey}</button>
          <button className="search-buttons detail-button">  Позиция: {level}</button>

        </div>
        <div className="job-card-buttons">
          <form action={`/interview/${id}`} >
            <button className="search-buttons card-buttons">Больше</button>
          </form>

        </div>
      </div>}
    </div>


  );
}

