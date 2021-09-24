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
import { getUser } from '../../redux/actions/user.action'
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function ImgMediaCard(Comment) {
  const dispatch = useDispatch()
  const oneUser = useSelector((state) => state.oneUser)
  console.log(oneUser)
  useEffect(() => {
    dispatch(getUser(Comment.user_id))
  }, [])

  const handleDelete = (id) => {
    console.log(id)

  }
  return (
    // <div >


    //   <div item>
    //     <div>
    //       <img style={{ width: "100px", height: "100px", borderRadius: "50%" }}
    //         alt={oneUser.firstName}
    //         src={oneUser.photo}
    //       />
    //     </div>
    //   </div>

    //   <div item xs={{ margin: '10px' }} sm container>
    //     <div item xs container direction="column" spacing={2}>
    //       <div item xs>
    //         <div gutterBottom variant="subtitle1" component="div">
    //           {oneUser.firstName}
    //         </div>
    //         <div variant="body2" gutterBottom>
    //           {Comment.text}
    //         </div>
    //         <div variant="body2" gutterBottom>
    //           <button onClick={() => handleDelete(Comment.id)}>Удалить</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
     <div className="job-card shadow border-radius">

        <div className="job-main">
          <div className="job-card-header avatar">
            {oneUser.photo ?
               <img style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                       alt={oneUser.firstName}
                       src={oneUser.photo}
               />
              :
              <img src="https://avatarko.ru/img/kartinka/1/panda_Pooh.jpg" alt="Avatar"/>
            }
          </div>
          <div className="job-content">
            <div className="job-name">
              <div className="job-card-title">{oneUser.firstName}</div>  
            </div>
            <div className="job-card-subtitle">
             {Comment.text}     
              </div>
          </div>
        
        </div>
      </div>

  );
}

