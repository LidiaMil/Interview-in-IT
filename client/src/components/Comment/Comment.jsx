import * as React from 'react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useCallback } from 'react'
import { getCommentUser } from '../../redux/actions/user.action'
import {deleteComment} from '../../redux/actions/comment.action'
import {commentInfoAction} from '../../redux/actions/comment.action'


export default function ImgMediaCard(Comment) {

  const dispatch = useDispatch()
  const idUser = Number(localStorage.getItem('user_id'))
  const [thisUser,setThisUser]=useState(false)
  let post=useParams()

  
  useEffect(() => {
    if(idUser==Comment.User.id){
      setThisUser(true)
    }
  }, [])




  const handleDelete = (id) => {
    dispatch(deleteComment(post.id,id))

  }
  const handleChange = (id) => {
    dispatch(deleteComment(post.id,id))
  }

  return (
    Comment && Comment.User && <div className="job-card shadow border-radius">

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
              <div className="job-card-title">{Comment.data}</div> 
            </div>
            <div className="job-card-subtitle">
             {Comment.text}     
              </div>
          </div>
          {thisUser ? 
        <div variant="body2" >
          <button onClick={() => handleDelete(Comment.id)}>🚽</button>
        </div>
        :
        <div>
          <button onClick={() => handleChange(Comment.id)}>+</button>
          <button onClick={() => handleChange(Comment.id)}>-</button>

        </div>
          }
        </div>
      </div>

  );
}

