import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, Avatar, IconButton } from '@material-ui/core';
import { PhotoCamera, } from '@material-ui/icons/';


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

const id = 1


function Profile() {
  const classes = useStyles();

  const [img, setImg] = useState("")

  useEffect(() => {
    let user = fetch(`http://localhost:3000/edit/${id}`)
      .then(res => res.json())
      .then(data => setImg(data.photo))
  }, [])


  function submintForm(e) {
    e.preventDefault()
    const formData = new FormData();
    const imagefile = document.querySelector('#icon-button-file');
    const name = document.querySelector('#firstName');
    formData.append('image', imagefile.files[0]);
    formData.append('nickname', name.value);
    formData.append('id',id)
    e.target.reset()
    fetch("http://localhost:3000/edit/upload", {
      method: 'POST',
      body: formData,
    })
      .then(result => result.text())
      .then(text => console.log(text))
  }



  function getMyPosts() {
    alert(55)
  }


  return (
    <Box component="div" m={1}>
      <img></img>
      <form className={classes.root} onSubmit={submintForm} noValidate autoComplete="off" enctype="multipart/form-data" action="/profile">
        <Box component="div" style={{ height: "100px" }} m={5}>
          <Avatar style={{ width: "100px", height: "100px" }} alt="Cindy Baker" src={img} />
        </Box>

        <div className={classes.root}>
          {/* <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          /> */}
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <input accept="image/*" className={classes.input} id="icon-button-file" name="photo" type="file" />
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
        </div>
      </form >

      <Box>
        <Button onClick={getMyPosts} variant="contained" color="primary" type="submit" disableElevation>
          Показать мои посты
        </Button>
      </Box>

    </Box >


  );




}
export default Profile

