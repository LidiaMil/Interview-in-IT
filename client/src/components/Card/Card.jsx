import * as React from 'react';
import { styled, Grid, Typography, Avatar, Paper, ButtonBase, CardMedia, Link } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getValue } from '../../redux/actions/raiting.action'
import { useState } from 'react';
import axios from 'axios';
import { getOrg } from '../../redux/actions/organization.action';
// import {Link} from "react-router-dom";






const Img = styled('img')({
  margin: '10px',
  display: 'block',
  maxWidth: '60px',
  maxHeight: '60px',
});


export default function Cards({ id, photo, Raitings, address, link, areaOfActivity, title, result}) {
  const dispatch = useDispatch()
  const [value, setValue] = useState(result);

  const getChange =  useCallback(async (newValue) => {
    setValue(newValue);
    await axios.patch('http://localhost:3000/organizations/rating', {newValue, id})
    dispatch(getOrg())
   

  }, [])
  


  return (

    

  //           <div className='companyCard'>
  //           <a href={`/organization/${id}`}>silka</a>
  //           <img src={photo} />

  //             <h3>
  //               {title}
  //             </h3>
  //             <div className="rightDivs"  gutterBottom>
  //               {areaOfActivity}
  //             </div>
  //             <div className="rightDivs"  color="text.secondary">
  //               {address}
  //             </div>
  //             <div className="rightDivs"  color="text.secondary">
  //               <p><a href={link} target="_blank">{link}</a></p>
  //             </div>
  // </div>

<a href={`/organization/${id}`} >
<div className="job-overview-card">
       <div className="job-card overview-card shadow border-radius">
        <div className="overview-wrapper">
        <img className = "companyImg" src={photo} />
         <div className="overview-detail">
          <div className="job-card-title">{title}</div>
          <div className="job-card-subtitle">
          {areaOfActivity}
          </div>
          <div className="job-card-subtitle">
          {address}
          </div>
          <div className="job-card-subtitle">
          {link} 
          </div>


         </div>
       
        </div>
     
        <div className="rating-block">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    getChange(newValue)
                      
                  }}
                />
                  <span >{result.toFixed(2)}</span>
              </div>
       </div>

      </div>
      </a>





 
  );
}

