import * as React from 'react';
import { styled, Grid, Typography, Avatar, Paper, ButtonBase , CardMedia} from '@material-ui/core';

const Img = styled('img')({
  margin: '20px',
  display: 'block',
  maxWidth: '100px',
  maxHeight: '100px',
});


export default function Cards({ id, photo, rating, address, link, areaOfActivity , title}) {

        return (
          <Paper  sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems:'center'}} >
            <Grid container spacing={2} alignItems='center'>
              <Grid item>
                <ButtonBase sx={{ width: 100, height: 100 }}>
                <Img alt="complex" src={photo} />

      
                </ButtonBase>
              </Grid>
              <Grid item xs={{margin: '100px'}} sm container>
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
                  </Grid>
                
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      }

