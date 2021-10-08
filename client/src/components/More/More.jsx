import * as React from 'react';
import { Button, styled, Grid, div, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
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

export default function ImgMediadiv() {
  const classes = useStyles();
  const [newComment, setNewComment] = useState(null);
  const [delComment, setDelComment] = useState(false)
  const postId = useParams()
  const dispatch = useDispatch()
  const idUser = Number(localStorage.getItem('user_id'))


  const comments = useSelector((state) => state.comments)
  const oneQuestion = useSelector((state) => state.oneQuestion)
  const oneUser = useSelector((state) => state.oneUser)

  useEffect(() => {
    dispatch(getOneQuestion(postId.id))
  }, [])

  useEffect(() => {
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
      idUser,
      {
        text: comments.text,
        Users: oneUser
      }))
    setNewComment(null);
  }

  const textAdd = (event) => {
    comments.text = event.target.value
  }

  console.log(delComment)

  return (
    <>
    <div className="job-card shadow border-radius">
      <div className="job-main">
        <div className="job-content">
          <div gutterBottom variant="h5" component="h2">
            Язык программирования: {arrLang.join(' ')}
          </div>
          <div variant="body2" color="textSecondary" component="p">
            Вопрос: {oneQuestion.text}
          </div>
        </div>
      </div>

      <div>
      <div variant="body2" color="textSecondary" component="p">
        {postId === newComment ? (
          <>
            <form  class="vue-form" onSubmit={handleSubmitAdd} >
              <div>
                <label class="label" for="name">Твой комментарий:</label>
                <input type="text" id="name" required="" v-model="name" onChange={textAdd}/>
              </div>
                <button type="submit" class="search-buttons card-buttons">Опубликовать</button>
            </form>
          </>
        ) : (
          <div direction="row" spacing={2}>
            <Button onClick={() => setNewComment(postId)} variant="contained"> Добавить комментарий</Button>
          </div>
        )}
      </div>
      </div>

    <div className={classes.root}>
      <div>
        {comments && comments.map((item, index) => <div className="col-4" key={item.id}><Comment {...item} /></div>)}
      </div>
    </div>
    </div>
    </>
  );
}



