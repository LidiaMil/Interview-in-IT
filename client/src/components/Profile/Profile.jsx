import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditInterview from '../EditInterview/EditInterview';
import { } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { clearMyInterviews, getMyInterviews, setProfileData, getMyFavoriteInterviews } from '../../redux/actions/editProfile.action';
import {getUser } from '../../redux/actions/user.action'
import OneInterview from '../OneInterview/OneInterview'
import {useHistory} from 'react-router-dom'

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
  const history=useHistory()
  const classes = useStyles();
  const dispatch = useDispatch()
  const [favorite, setFavorite] = useState(true)
  const img = useSelector(state => state.oneUser.photo)
  const nickname = useSelector(state => state.oneUser.firstName)
  const myInterviews = useSelector(state => state.myInterviews)
  const favInterviews = useSelector(state => state.favInterviews)
  const [inputValue, setInputValue] = useState(null)
  const ref = useRef(null)

  // const [posts, setPosts] = useState([])
  const [nick, setNick] = useState(nickname)
  const [statusUpload, setStatusUpload] = useState("")

  useEffect(() => dispatch(getMyFavoriteInterviews()), [])
  useEffect(() => {
    setNick(nickname)
  }, [nickname])

  function inputChange(e) {
    const refCurrent = ref.current
    // const retChild = refCurrent.childNodes[0]
    let reader = new FileReader();
    reader.onloadend = function () {
      refCurrent.src = reader.result
    }
    reader.readAsDataURL(e.target.files[0])
  }

  // const getRender=()=>{
  // history.go(0)
  // console.log('cdsd')

  // }
  function submintForm(e) {
    e.preventDefault()
    const formData = new FormData();
    const imagefile = document.querySelector('#contained-button-file');
    const name = document.querySelector('#firstName');
    formData.append('image', imagefile.files[0] ? imagefile.files[0] : null);
    formData.append('nickname', name.value);
    formData.append('id', id)
    // if (nick) {
      dispatch(setProfileData(
        formData
      ))
      // setNick(nick)
      getUser(id)
      
    // } else {
    //   alert('не введён nickname')
    // }
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
      <div className="center-div" >
        <div className="job-cards">
          <form
            className={`${classes.root} vue-form profile-form shadow border-radius`}
            onSubmit={submintForm}
            noValidate autoComplete="off"
            encType="multipart/form-data"
            action="/profile"
          >
            <div className="job-overview-card">
            {img ?
                <img
                style={{ width: "100px", height: "100px" }}
                src={img} ref={ref}
                alt="Avatar"
                className="avatar" />
                :
                <img 
                style={{ width: "100px", height: "100px" }}
                src="../../1.png" ref={ref}
                alt="Avatar"
                 />
              }
            </div>

            <div >
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                name="photo"
                type="file"
                onChange={inputChange}
                value={inputValue}
              />
              <button style={{margin:'3px'}} className="search-buttons detail-button">
                <label htmlFor="contained-button-file" >
                  Загрузить фото
                </label>
              </button>
              <div>Nick: {nick}</div>
              <input
              style={{margin:'3px'}}
                id="firstName"
                label="nickname"
                name="firstName"
                type="text"
                onChange={(e) => setNick(e.target.value)}
                value={nick}
                placeholder="введите ваш nickname"
              />

              <button style={{margin:'3px'}} variant="contained" color="primary" class="search-buttons">
                  Изменить
              </button>

            </div>
          </form >

          <div>
            {/* <button style={{margin:'7px'}} className="search-buttons detail-button" onClick={getMyPosts}>
              {myInterviews.length ? "Скрыть собеседования" : "Показать мои собеседования"}
            </button> */}
          </div>
        </div>
        <div>
          {/* {favorite ?
            <button style={{margin:'7px'}} className="search-buttons detail-button" onClick={() => handleViewFavorite()}>
              Избранное
            </button>
            :
            <>
              <button className="search-buttons detail-button" onClick={() => setFavorite(!favorite)}>
                Скрыть избранное
              </button>

              {favInterviews && favInterviews.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}
            </>
          } */}

{favInterviews && favInterviews.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}

        </div>
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



