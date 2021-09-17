import * as React from 'react';
import { styled, Grid, Typography, Avatar, Paper, ButtonBase, CardMedia } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getValue } from '../../redux/actions/raiting.action'
import { useState } from 'react';



const Img = styled('img')({
  margin: '20px',
  display: 'block',
  maxWidth: '100px',
  maxHeight: '100px',
});


export default function Cards({ id, photo, Raitings, address, link, areaOfActivity, title}) {
  const dispatch = useDispatch()
 console.log(Raitings)
  // const sum = Raitings.reduce((acc, cur) =>  acc + cur.number )
let acc = 0
const average = Raitings.map((el) => acc += el.number)

  let result = average / Raitings.length
  
  const [value, setValue] = useState(result);
  
  useEffect(() => {
    
    dispatch(getValue(value))
}, [])

 


  return (

    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }} >
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={photo} />


          </ButtonBase>
        </Grid>
        <Grid item xs={{ margin: '100px' }} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {areaOfActivity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p><a href={link} target="_blank">{link}</a></p>
              </Typography>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={result}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />

              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

