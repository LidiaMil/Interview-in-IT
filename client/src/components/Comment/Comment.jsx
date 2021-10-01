import * as React from 'react';
import { Button, styled, Box, Avatar, ButtonBase } from '@material-ui/core';
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
import { getCommentUser } from '../../redux/actions/user.action'
import {deleteComment} from '../../redux/actions/comment.action'
import {commentInfoAction} from '../../redux/actions/comment.action'
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function ImgMediaCard(Comment,index) {

  const idUser = Number(localStorage.getItem('user_id'))
  const [thisUser,setThisUser]=useState(false)
  const oneUser = useSelector((state) => state.oneUser)
  const dispatch = useDispatch()
  let post=useParams()
  
  // if(oneUser.id===Comment.user_id){
  //   setThisUser(true)
  // }

  const handleDelete = (id) => {
    dispatch(deleteComment(post.id,id))
  }

  return (
     <div className="job-card shadow border-radius">

        <div className="job-main">
          <div className="job-card-header avatar">
            {Comment.User.photo ?
               <img style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                       alt={Comment.User.firstName}
                       src={Comment.User.photo}
               />
              :
              <img src="https://avatarko.ru/img/kartinka/1/panda_Pooh.jpg" alt="Avatar"/>
            }
          </div>
          <div className="job-content">
            <div className="job-name">
              <div className="job-card-title">{Comment.User.firstName}</div>  
            </div>
            <div className="job-card-subtitle">
             {Comment.text}     
              </div>
          </div>
          {thisUser ? 
        <div variant="body2" gutterBottom>
              <button onClick={() => handleDelete(Comment.id)}>Удалить</button>
        </div>
        :
        <div></div>
          }
        </div>
      </div>

  );
}

