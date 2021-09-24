
import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import { useMemo, useEffect, useCallback, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { getOrganizationInterview } from '../../redux/actions/organizationInterview.action'
import OneInterview from "../OneInterview/OneInterview"
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { getOrg } from '../../redux/actions/organization.action';



const Img = styled('img')({
  margin: '75px',
  display: 'block',
  maxWidth: '150px',
  maxHeight: '150px',
});


export default function OrganizationInterview() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrg())
}, [])

  const interview = useSelector((state) => state.organizationInterview)
  const  organization = useSelector((state) => state.organization)

  const [value, setValue] = useState(organization?.result);

  const {id} = useParams()
  useEffect(() => {
    dispatch(getOrganizationInterview(id))
  }, [])

  const getChange =  useCallback(async (newValue) => {
    setValue(newValue);
    await axios.patch('http://localhost:3000/organizations/rating', {newValue, id})
    dispatch(getOrg())
  }, [])


  return (
    <Typography gutterBottom variant="subtitle1" component="div">

          <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center', fontSize: '14px'}} >
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }} href={`/organization/${id}`}>
            <Img alt="complex" src={interview[0]?.Organizations[0]?.photo} />
         
          </ButtonBase>

        </Grid>
        <Grid item xs={{ margin: '100px' }} sm container>
          <Grid item xs container direction="column" spacing={2}>
          
            <Grid item xs>
              {/* <h3>
                {interview[0]?.Organizations[0]?.title}
              </h3> */}
        <h2>{interview[0]?.Organizations[0]?.title}</h2>

              <div className="rightDivs"  gutterBottom>
                {interview[0]?.Organizations[0]?.areaOfActivity}
              </div>
              <div className="rightDivs"  color="text.secondary">
                {interview[0]?.Organizations[0]?.address}
              </div>
              <div className="rightDivs"  color="text.secondary">
                <p><a href={interview[0]?.Organizations[0]?.link} target="_blank">{interview[0]?.Organizations[0]?.link}</a></p>
              </div>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={Math.floor(organization[0]?.result.toFixed(2))}
                  onChange={(event, newValue) => {
                      getChange(newValue)
                  }}
                />
                  {organization[0]?.result.toFixed(2)}
              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
        <div >
        {interview && interview.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}
      </div>
      </Typography>
  );
}
