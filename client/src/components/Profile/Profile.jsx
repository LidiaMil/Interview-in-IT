import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, Avatar, IconButton } from '@material-ui/core';
import { PhotoCamera, } from '@material-ui/icons/';

<<<<<<< HEAD:client/src/components/Profile/Profile.jsx






=======
>>>>>>> main:frontend/src/components/Profile/Profile.jsx
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNvAGeLUnT6o3GAdfd9HIqdNGykBe2Gy3Gw&usqp=CAU"

function Profile() {
  const classes = useStyles();

  function submintForm(e) {
    e.preventDefault()
    const dataForm = Object.fromEntries(new FormData(e.target))
    e.target.reset()
    console.log(dataForm.foto);

  }


  return (
    <Box component="div" m={1}>
      <img></img>
      <form className={classes.root} onSubmit={submintForm} noValidate autoComplete="off">
        <Box component="div" style={{ height: "100px" }} m={5}>
          <Avatar style={{ width: "100px", height: "100px" }} alt="Cindy Baker" src={img} />
        </Box>

        <div className={classes.root}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <input accept="image/*" className={classes.input} id="icon-button-file" name="foto" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>

          <TextField id="firstName" label="nickname" name="firstName" />
          {/* <TextField id="name" label="Имя" name="name" /> */}

          <button variant="contained" color="primary">
            Изменить
          </button>
          {/* 
          <Button variant="contained" color="primary" type="submit" disableElevation>
            Disable elevation
          </Button> */}

        </div>
      </form >
    </Box >


  );




}
export default Profile

