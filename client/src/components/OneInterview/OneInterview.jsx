import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link,useParams } from "react-router-dom";
import Question from '../Question/Question';
import {changeFavorite,newFavorite} from '../../redux/actions/changeFavorite.action'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"




export default function ComplexGrid({ id, data, name, description, level, Questions, Categorey, User, Organizations,favorites }) {

  const dispatch=useDispatch()
  const changeFavorite=useSelector(state=>state.changeFavorite)

  // useEffect(() => {
  //   dispatch(changeFavorite(id))
  // }, [])
 

  let arrOrg = []
  if(Organizations.length){
    for (let i = 0; i < Organizations.length; i++) {
      arrOrg.push(Organizations[i].title)
    }
  }

  const handleFavorite = (id) => {
    dispatch(newFavorite(id))
  }
  
  return (
    <Paper sx={{ p: 2, margin:'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>
      {User && Categorey && <Grid container spacing={3} alignItems='flex-start'>
        <Grid item>
          <ButtonBase sx={{ p: 5,width: 100, height: 100}} >
            <Avatar  
              alt={User.firstName}
              src={User.photo}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={{ margin: '100px' }} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {User.firstName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Организация: {arrOrg.join(' ')}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Категория: {Categorey.categorey}
              </Typography>
              <Typography variant="subtitle1" component="div">
              Позиция: {level}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Должность: {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Дата собеедования: {data}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Описание: {description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button variant="outlined"> <Link to={`/interview/${id}`}>More</Link></Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              
             <button onClick={() => handleFavorite(id)} type="button"> {favorites ? 'Удалить из избранного': 'В избранное'}</button> 
            </Typography>
          </Grid>
        </Grid>
      </Grid>}
    </Paper>
  );
}

