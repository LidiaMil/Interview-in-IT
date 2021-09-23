import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import Question from '../Question/Question';
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useEffect } from 'react'
import {countCommentQuestion} from '../../redux/actions/comment.action'

export default function ComplexGrid(interview ) {
    
  const postId = useParams()
  const dispatch = useDispatch()
  let history = useHistory();
  console.log("post ",postId.id)
  const countComment = useSelector((state) => state.countComment)

  useEffect(() => {
    dispatch(countCommentQuestion(postId.id))
  }, [])

  const handleLink= (id) => {
    history.push(`/question/${id}`)
  }

  return (
    <>
   <div>
    <div>Вопрос № {interview.index+1}</div>
    <button onClick={() => handleLink(interview.id)} >{interview.text}</button>
    <div>Всего комментариев к вопросу: {countComment}</div>
   </div>
   </>
  );
}
