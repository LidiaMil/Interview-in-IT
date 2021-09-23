import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import axios from "axios"
import { useEffect, useState } from "react"
import { getOneQuestion } from '../../redux/actions/oneQuest.action'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useCallback } from 'react'
import Comment from '../Comment/Comment'
import { getComment, addComment } from '../../redux/actions/comment.action'
const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [newComment, setNewComment] = useState(null);
  const postId = useParams()
  // console.log("post ",postId)
  const dispatch = useDispatch()

  const comments = useSelector((state) => state.comments)
  const oneQuestion = useSelector((state) => state.oneQuestion)
  // console.log(oneQuestion)

  useEffect(() => {
    dispatch(getOneQuestion(postId.id))
    dispatch(getComment(postId.id))
    
  }, [])

  let arrLang = [];
  if (oneQuestion.Languages) {
    for (let i = 0; i < oneQuestion.Languages.length; i++) {
      arrLang.push(oneQuestion.Languages[i].programmingLanguage)
    }
  }

  const handleSubmitAdd = (event) => {
    event.preventDefault()
    dispatch(addComment(
      postId.id,
      {
        text: comments.text
      }))
    setNewComment(null);
  }
  const textAdd = (event) => {
    comments.text = event.target.value
  }

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Язык программирования: {arrLang.join(' ')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Вопрос: {oneQuestion.text}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
      <Typography variant="body2" color="textSecondary" component="p">
        {postId === newComment ? (
          <>
            <form onSubmit={handleSubmitAdd} >
              <div>
                <TextField id="outlined-basic" label="text:" variant="outlined"  onChange={textAdd}/>
                <Button type="submit" variant="contained">Опубликовать</Button>
              </div>
            </form>
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setNewComment(postId)} variant="contained"> Добавить комментарий</Button>
          </Stack>
        )}
      </Typography>
      </CardActionArea>

    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        {comments && comments.map((item, index) => <div className="col-4" key={item.id}><Comment {...item} /></div>)}
      </CardActionArea>
    </Card>
    </>
  );
}



