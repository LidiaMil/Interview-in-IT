
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


  return (
    <p><a href={`/question/${interview.id}`}>{interview}</a> </p>

  );
}
