import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from "axios"
import { useEffect, useState } from "react"
import { getOneQuestion } from '../../redux/actions/oneQuest.action'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useCallback } from 'react'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function ImgMediaCard(Comment) {

  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>
    <Grid container spacing={3}>
      <Grid item xs={10} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {Comment.user_id}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {Comment.text}
            </Typography>
          </Grid>
        </Grid>
  
      </Grid>
    </Grid>
    
  </Paper>

  );
}

