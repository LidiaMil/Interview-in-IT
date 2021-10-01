
import * as React from 'react';
import { Button, Grid, Typography, Paper } from '@material-ui/core';
import Question from '../Question/Question';
import { deleteMyInterview, editMyInterview } from '../../redux/actions/editProfile.action';
import { useDispatch, useSelector } from 'react-redux'
import {
  Link
} from "react-router-dom";


export default function EditInterview({ id,  data, name, description, level, questions, categorey, organization}) {
  const dispatch = useDispatch()

  function deleteInterview() {
    dispatch(deleteMyInterview(id))
  }

  function getUsersInterview(){
    dispatch(editMyInterview(id))    
  }

  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>
      <Grid container spacing={3} alignItems='flex-start'>
        <Grid item xs={{ margin: '100px' }} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {data} Наименование {name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {organization}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Категория {categorey}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {questions && questions.map((item, index) => <div className="col-4" key={item.id}><Question {...item} index={index}/></div>)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button variant="outlined" onClick={getUsersInterview}> <Link className="nav-link" to={`/newcomment/${id}`}>Редактировать</Link></Button>
                
                <Button onClick={deleteInterview} variant="outlined"> Удалить</Button>
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
