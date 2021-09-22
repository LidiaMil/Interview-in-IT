import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import Question from '../Question/Question';
import { getOneInterview } from '../../redux/actions/oneInterview.action'

export default function ComplexGrid() {
  
  const postId = useParams()
  console.log("post ",postId.id)
  const dispatch = useDispatch()
  const oneInterview = useSelector((state) => state.oneInterview)
  const {User, Categorey} = oneInterview
  console.log("0",oneInterview)

  useEffect(() => {
    console.log('123')
    dispatch(getOneInterview(postId.id))
  }, [])


  let arrOrg = []
  for (let i = 0; i < oneInterview?.Organizations?.length; i++) {
    arrOrg.push(oneInterview?.Organizations[i].title)
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
                {oneInterview?.User.firstName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Организация: {arrOrg.join(' ')}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Категория: {oneInterview?.Categorey.categorey}
              </Typography>
              <Typography variant="subtitle1" component="div">
                Позиция: {oneInterview?.level}
             </Typography>
              <Typography variant="body2" gutterBottom>
               Должность: {oneInterview?.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Дата собеедования: {oneInterview?.data}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Описание: {oneInterview?.description}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Вопросы:
                  {oneInterview?.Questions && oneInterview?.Questions.map((item, index) => <div className="col-4" key={item.id}>{index+1}: <Question {...item} /></div>)}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
             {oneInterview.favorites ? 
             <button> В избранное
             </button> :
             <button> Удалить из избранного
             </button>
               }
            </Typography>
          </Grid>
        </Grid> 
      </Grid>}
    </Paper>
  );
}

