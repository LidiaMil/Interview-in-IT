import * as React from 'react';
import { styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';

export default function Cards({ id, text, data, user_id , User}) {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 400, flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase sx={{ width: 256, height: 256 }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 256, height: 256 }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {User.firstName}
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
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}


