import * as React from 'react';
import { styled, Grid, Typography, Avatar, Paper, ButtonBase, CardMedia } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useMemo, useEffect, useCallback } from 'react'
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
  // const sum = Raitings.reduce((acc, cur) =>  acc + cur.number )
let acc = 0
let  arrNum =  Raitings.map((el) => acc += el.number)
let startRes = acc / Raitings.length
let result = Math.round(acc / arrNum.length)

  // const [value, setValue] = useState(result)
  
  
  // console.log('State',value)
  const ttry = useCallback((newValue) => {
    console.log('inCallback',newValue)
    dispatch(getValue(newValue, id))
  }, [])
  


  return (

    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center', fontSize: '14px'}} >
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={photo} />


          </ButtonBase>
        </Grid>
        <Grid item xs={{ margin: '100px' }} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <h3>
                {title}
              </h3>
              <div className="rightDivs"  gutterBottom>
                {areaOfActivity}
              </div>
              <div className="rightDivs"  color="text.secondary">
                {address}
              </div>
              <div className="rightDivs"  color="text.secondary">
                <p><a href={link} target="_blank">{link}</a></p>
              </div>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={result}
                  onChange={(event, newValue) => {
                    
                    // setValue(newValue);
                    // console.log(value,'neewwvaaalue');
                      ttry(newValue)
                      
                  }}
                />
                  {startRes}
              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

