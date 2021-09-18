import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, Avatar } from '@material-ui/core';
import CardPost from '../CardPost/CardPost';


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
  const [posts, setPosts] = useState([])
  const [nickname, setNickname] = useState("")

  useEffect(() => {
    let user = fetch(`http://localhost:3000/edit/${id}`)
      .then(res => res.json())
      .then(data => {
        setImg(data.photo)
        setNickname(data.firstName)
      })
  }, [])


  function submintForm(e) {
    e.preventDefault()
    const formData = new FormData();
    const imagefile = document.querySelector('#contained-button-file');
    const name = document.querySelector('#firstName');
    formData.append('image', imagefile.files[0] ? imagefile.files[0] : null);
    formData.append('nickname', name.value);
    formData.append('id', id)
    e.target.reset()
    fetch("http://localhost:3000/edit/upload", {
      method: 'POST',
      body: formData,
    })
      .then(result => result.text())
    // .then(text => console.log(text))
  }



  function getMyPosts() {
    if (posts.length) {
      setPosts([])
    } else {
      fetch(`http://localhost:3000/edit/getusersposts/${id}`)
        .then(result => result.json())
        .then(data => setPosts(data))
    }
  }


  return (
    <>
      <Box component="div" m={1}>
        {/* <img></img> */}
        <form className={classes.root} onSubmit={submintForm} noValidate autoComplete="off" enctype="multipart/form-data" action="/profile">
          <Box component="div" style={{ height: "100px" }} m={5}>
            <Avatar style={{ width: "100px", height: "100px" }} alt="Cindy Baker" src={img} />
          </Box>

          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              name="photo"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Загрузить фото
              </Button>
            </label>

            <TextField id="firstName" label="nickname" name="firstName" onChange={(e) => setNickname(e.target.value)} value={nickname} />

            < Button type="submint" variant="contained" color="primary">
              Изменить
            </Button>


          </div>
        </form >

        <Box>
          <Button onClick={getMyPosts} variant="contained" color="primary" type="submit" disableElevation>
            {posts.length ? "Скрыть посты" : "Показать мои посты"}
          </Button>
        </Box>

      </Box >

      {posts.map((e, index) => <CardPost key={e.id} index={index} text={e.text} />)}

    </>
  );




}
export default Profile

