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
  const countComment = useSelector((state) => state.countComment)
  console.log("post ",countComment)

  useEffect(() => {
    dispatch(countCommentQuestion(postId.id))
  }, [])

  const handleLink= (id) => {
    history.push(`/question/${id}`)
  }

  return (
    <>

   <div className="job-card shadow border-radius" onClick={() => handleLink(interview.id)} style={{cursor: 'pointer'}}>
    <p>Вопрос № {interview.index+1}</p>
    <h4>{interview.text}</h4>
    <p>Всего комментариев к вопросу: {countComment[interview.index]}</p>
   </div>
   </>
  );
}
