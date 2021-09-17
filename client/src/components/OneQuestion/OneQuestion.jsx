
import * as React from 'react';
import { styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';


export default function ComplexGrid({ id, text, data, user_id , User,Languages,Organizations}) {
  let arrQuest=[]
  let arrOrg=[]

  for(let i=0;i<Languages.length;i++){
    arrQuest.push(Languages[i].programmingLanguage)
  }
  for(let i=0;i<Organizations.length;i++){
    arrOrg.push(Organizations[i].title)
  }
  return (
    <Paper sx={{ p: 4, margin: 'auto', maxWidth: 400, flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase >
            <Avatar sx={{ width: 256, height: 256 }}
              alt={User.firstName}
              src= {User.photo}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {User.firstName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {arrOrg.join(' ')}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {text}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Ответить
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {arrQuest.join(' ')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

