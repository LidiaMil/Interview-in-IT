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
    console.log('inCallback',newValue)
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


<div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
        <img src={photo} />
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
         {/* <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg> */}
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Звездочки</div>

         {/* <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div> */}
        </div>
       </div>
       <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    
                    // setValue(newValue);
                    // console.log(value,'neewwvaaalue');
                    getChange(newValue)
                      
                  }}
                />
                  {result.toFixed(2)}
              </Box>
      </div>






 
  );
}

