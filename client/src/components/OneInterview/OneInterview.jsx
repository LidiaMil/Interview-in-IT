
import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link,useParams } from "react-router-dom";
import Question from '../Question/Question';

export default function ComplexGrid({ id, text, data, name, description, level, Questions, Categorey, User, Organizations }) {
  // console.log(id, text, data, name, description, level, Questions, Categorey, User, Organizations)
const {id_interview} = useParams()
  let arrOrg = []
  for (let i = 0; i < Organizations.length; i++) {
    arrOrg.push(Organizations[i].title)
  }

  return (
    <Paper sx={{ p: 2, margin:'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>
      <Grid container spacing={3} alignItems='flex-start'>
        <Grid item>
          <ButtonBase sx={{ p: 5,width: 100, height: 100}} >
            <Avatar  
              alt={User.firstName}
              src={User.photo}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={{ margin: '100px' }} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {User.firstName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {arrOrg.join(' ')}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {Categorey.categorey}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {text}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                  {Questions && Questions.map((item, index) => <div className="col-4" key={item.id}>{index+1}: <Question {...item} /></div>)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button variant="outlined"> <Link to={`/question/${id}`}>More</Link></Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {level}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

