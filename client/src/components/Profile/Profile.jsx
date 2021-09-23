import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditInterview from '../EditInterview/EditInterview';
import { } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { clearMyInterviews, getMyInterviews, setImgProfile, setNicknameProfile, getMyFavoriteInterviews } from '../../redux/actions/editProfile.action';
import OneInterview from '../OneInterview/OneInterview'

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


//id пользователя
const id = Number(localStorage.getItem('user_id'))
function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [favorite, setFavorite] = useState(true)
  const img = useSelector(state => state.img.img)
  const nickname = useSelector(state => state.img.nickname)
  const myInterviews = useSelector(state => state.myInterviews)
  const favInterviews = useSelector(state => state.favInterviews)
  const [inputValue, setInputValue] = useState(null)
  const ref = useRef(null)

  // const [posts, setPosts] = useState([])
  const [nick, setNick] = useState(nickname)
  const [statusUpload, setStatusUpload] = useState("")
  useEffect(() => {
    dispatch(setImgProfile(id))
    setNick(nickname)
  }, [nickname, img])

  function inputChange(e) {
    const refCurrent = ref.current
    // const retChild = refCurrent.childNodes[0]
    let reader = new FileReader();
    reader.onloadend = function () {
      refCurrent.src = reader.result
    }
    reader.readAsDataURL(e.target.files[0])
  }

  function submintForm(e) {
    e.preventDefault()
    const formData = new FormData();
    const imagefile = document.querySelector('#contained-button-file');
    const name = document.querySelector('#firstName');
    formData.append('image', imagefile.files[0] ? imagefile.files[0] : null);
    formData.append('nickname', name.value);
    formData.append('id', id)
    if (nick) {
      dispatch(setNicknameProfile(
        formData
      ))
      setNick(nick)
    } else {
      alert('не введён nickname')
    }
  }

  const handleViewFavorite = () => {
    dispatch(getMyFavoriteInterviews())
    setFavorite(!favorite)
  }

  function getMyPosts() {
    if (myInterviews.length) {
      dispatch(clearMyInterviews())
    } else {
      dispatch(getMyInterviews(id))
    }
  }

  return (
    <>
      <h3>=={id}==</h3>
      <div>
        <h1>{statusUpload}</h1>
        <form className={classes.root} onSubmit={submintForm} noValidate autoComplete="off" encType="multipart/form-data" action="/profile">
          <div>
            <img style={{ width: "100px", height: "100px" }} alt="Cindy Baker" src={img} ref={ref} />

          </div>

          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              name="photo"
              type="file"
              onChange={inputChange}
              value={inputValue}
            />
            <label htmlFor="contained-button-file">
                Загрузить фото
            </label>

            <input
              id="firstName"
              label="nickname"
              name="firstName"
              onChange={(e) => setNick(e.target.value)}
              value={nick}
              placeholder="введите ваш nickname"
            />

            <button>
              Изменить
            </button>

          </div>
        </form >

        <div>
          <button onClick={getMyPosts}>
            {myInterviews.length ? "Скрыть посты" : "Показать мои посты"}
          </button>
        </div>
      </div>
      <div>
        {favorite ?
          <button onClick={() => handleViewFavorite()}>
            Избранное
          </button>
          :
          <>
            <button onClick={() => setFavorite(!favorite)}>
              Скрыть избранное
            </button>

            {favInterviews && favInterviews.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}
          </>
        }

      </div>

      {myInterviews.map((e, index) => <EditInterview
        usersId={id}
        key={e.id}
        id={e.id}
        index={index}
        name={e.name}
        description={e.description}
        data={e.data}
        level={e.level}
        categorey={e.Categorey.categorey}
        organization={e.Organizations[0].title}
        questions={e.Questions}
      />)}

    </>
  );
}
export default Profile
