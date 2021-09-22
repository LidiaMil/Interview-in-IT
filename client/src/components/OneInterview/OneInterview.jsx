import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link,useParams } from "react-router-dom";
import Question from '../Question/Question';
import {changesFavorite,newFavorite} from '../../redux/actions/changeFavorite.action'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"




export default function ComplexGrid({ id, data, name, description, level, Questions, Categorey, User, Organizations,favorites }) {
  const [favorite,setFavorite]=useState(favorites)
  const dispatch=useDispatch()
  // const changeFavorite=useSelector(state=>state.changeFavorite)
  console.log("changeFavorite",favorite)

  // useEffect(() => {
  //   dispatch(changesFavorite(id))
  // }, [])

  let arrOrg = []
  if(Organizations.length){
    for (let i = 0; i < Organizations.length; i++) {
      arrOrg.push(Organizations[i].title)
    }
  }

  const handleFavorite = (id) => {
    dispatch(newFavorite(id))
    setFavorite(!favorite)
  }
  
  return (
    // <Paper sx={{ p: 2, margin:'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>
    //   {User && Categorey && <Grid container spacing={3} alignItems='flex-start'>
    //     <Grid item>
    //       <ButtonBase sx={{ p: 5,width: 100, height: 100}} >
    //         <Avatar  
    //           alt={User.firstName}
    //           src={User.photo}
    //         />
    //       </ButtonBase>
    //     </Grid>
    //     <Grid item xs={{ margin: '100px' }} sm container>
    //       <Grid item xs container direction="column" spacing={2}>
    //         <Grid item xs>
    //           <Typography gutterBottom variant="subtitle1" component="div">
    //             {User.firstName}
    //           </Typography>
    //           <Typography gutterBottom variant="subtitle1" component="div">
    //             Организация: {arrOrg.join(' ')}
    //           </Typography>
    //           <Typography variant="body2" gutterBottom>
    //             Категория: {Categorey.categorey}
    //           </Typography>
    //           <Typography variant="subtitle1" component="div">
    //           Позиция: {level}
    //           </Typography>
    //           <Typography variant="body2" gutterBottom>
    //             Должность: {name}
    //           </Typography>
    //           <Typography variant="body2" gutterBottom>
    //             Дата собеедования: {data}
    //           </Typography>
    //           <Typography variant="body2" gutterBottom>
    //             Описание: {description}
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Typography sx={{ cursor: 'pointer' }} variant="body2">
    //             <Button variant="outlined"> <Link to={`/interview/${id}`}>More</Link></Button>
    //           </Typography>
    //         </Grid>
    //       </Grid>
    //       <Grid item>
    //         <Typography variant="subtitle1" component="div">
              
    //          <button onClick={() => handleFavorite(id)} type="button"> {favorites ? 'Удалить из избранного': 'В избранное'}</button> 
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Grid>}
    // </Paper>

  <div>
    { User && Categorey &&  <div className="job-card">
      <div className="job-card-header">
       <img alt={User.firstName} class="avatar" src={User.photo} />
       <svg className="heart-like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z"></path></svg>
       </div>
      <div className="job-card-title">{User.firstName}</div>
      <div className="job-card-subtitle">
      Должность: {name}     </div>
      <div className="job-card-subtitle">
      Описание: {description}      </div>
      <div className="job-detail-buttons">
       <button className="search-buttons detail-button"> Организация: {arrOrg.join(' ')}</button>
       <button className="search-buttons detail-button">Категория: {Categorey.categorey}</button>
       <button className="search-buttons detail-button">  Позиция: {level}</button>

      </div>
      <div className="job-card-buttons">
      <form action={`/interview/${id}`} >
   <button className="search-buttons card-buttons">Больше</button>
  </form>
   <button className="search-buttons card-buttons" onClick={() => handleFavorite(id)} type="button"> {favorite ? 'Удалить из избранного': 'В избранное'}</button> 

      </div>
     </div> }
     </div>
            //  <button onClick={() => handleFavorite(id)} type="button"> {favorite ? 'Удалить из избранного': 'В избранное'}</button> 
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Grid>}
    // </Paper>
  );
}

