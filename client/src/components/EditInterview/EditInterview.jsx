
import * as React from 'react';
import { Button, Grid, Typography, Paper } from '@material-ui/core';
import Question from '../Question/Question';
import { deleteMyInterview } from '../../redux/actions/editProfile.action';
import { useDispatch, useSelector } from 'react-redux'


export default function EditInterview({ id, text, data, name, description, level, questions, categorey, organization, usersId }) {
  const dispatch = useDispatch()

  function editInterview() {
    // fetch(`http://localhost:3000/edit/editinterview/${id}`)

  }

  function deleteInterview() {
    dispatch(deleteMyInterview(`?id=${id}&usersId=${usersId}`))
  }

  // ?F=Kalinin&I=Sergey
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
                {questions && questions.map((item, index) => <div className="col-4" key={item.id}>{index + 1}: <Question {...item} /></div>)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button onClick={editInterview} variant="outlined"> Редактировать</Button>
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

