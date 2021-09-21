
import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import Question from '../Question/Question';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getOrganizationInterview } from '../../redux/actions/organizationInterview.action'




export default function OrganizationInterview() {
  const dispatch = useDispatch()
  const interview = useSelector((state) => state.organizationInterview)
  const {id} = useParams()
  useEffect(() => {
    dispatch(getOrganizationInterview(id))
  }, [])

  // let arrOrg = []
  // for (let i = 0; i < Organizations.length; i++) {
  //   arrOrg.push(Organizations[i].title)
  // }

  console.log('============', interview)
  return (
    // // <p><a href={`/question/${interview.id}`}>{interview}</a> </p>
  
    <Typography gutterBottom variant="subtitle1" component="div">
        {/* <h1>{interview && interview[0].Organizations.name}</h1> */}
    {interview && interview.map((item, index) => <div className="col-4" key={item.id}>{index+1}: <Question {...item} /></div>)}
</Typography>
  );
}
