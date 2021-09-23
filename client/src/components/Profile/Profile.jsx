import React, { useEffect, useState } from 'react';
import EditInterview from '../EditInterview/EditInterview';
import { } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { clearMyInterviews, getMyInterviews, setImgProfile, setNicknameProfile, getMyFavoriteInterviews } from '../../redux/actions/editProfile.action';
import OneInterview from '../OneInterview/OneInterview'




//id пользователя
const id = 1

function Profile() {
  const dispatch = useDispatch()
  const [favorite, setFavorite] = useState(true)
  const img = useSelector(state => state.img.img)
  const nickname = useSelector(state => state.img.nickname)
  const myInterviews = useSelector(state => state.myInterviews)
  const favInterviews = useSelector(state => state.favInterviews)
  // const [posts, setPosts] = useState([])
  const [nick, setNick] = useState("")
  const [statusUpload, setStatusUpload] = useState("")
  useEffect(() => {
    dispatch(setImgProfile(id))
  }, [nickname, img])

  // console.log("----",myInterviews);
  function submintForm(e) {
    e.preventDefault()

    const formData = new FormData();
    const imagefile = document.querySelector('#contained-button-file');
    const name = document.querySelector('#firstName');
    formData.append('image', imagefile.files[0] ? imagefile.files[0] : null);
    formData.append('nickname', name.value);
    formData.append('id', id)
    dispatch(setNicknameProfile(
      formData
    ))
    setNick("")
  }
  console.log(favInterviews)

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
    // <h3>=={id}==</h3>
    // <Box component="div" m={1}>
    //   <h1>{statusUpload}</h1>
    //   <form classNameName={classNamees.root} onSubmit={submintForm} noValidate autoComplete="off" encType="multipart/form-data" action="/profile">
    //     <Box component="div" style={{ height: "100px" }} m={5}>
    //       <Avatar style={{ width: "100px", height: "100px" }} alt="Cindy Baker" src={img} />
    //     </Box>

    //     <div classNameName={classNamees.root}>
    //       <input
    //         accept="image/*"
    //         classNameName={classNamees.input}
    //         id="contained-button-file"
    //         name="photo"
    //         type="file"
    //       />
    //       <label htmlFor="contained-button-file">
    //         <Button variant="contained" color="primary" component="span">
    //           Загрузить фото
    //         </Button>
    //       </label>

    //       <Input id="firstName" label="nickname" name="firstName" onChange={(e) => setNick(e.target.value)} value={nick} placeholder={nickname} />

    //       < Button type="submint" variant="contained" color="primary">
    //         Изменить
    //       </Button>

    //     </div>
    //   </form >



    // <div>
    // {favorite ? 
    //      <button onClick={() => handleViewFavorite()}>
    //      Избранное
    //      </button>
    //      :
    //      <>
    //      <button onClick={() => setFavorite(!favorite)}>
    //      Скрыть избранное
    //      </button>

    //      {favInterviews && favInterviews.map((item, index) => <div classNameName="col-4" key={item.id}><OneInterview {...item} /></div>)}
    //      </>
    //      }

    // </div>

    // {myInterviews.map((e, index) => <EditInterview
    //   usersId={id}
    //   key={e.id}
    //   id={e.id}
    //   index={index}
    //   name={e.name}
    //   description={e.description}
    //   data={e.data}
    //   level={e.level}
    //   categorey={e.Categorey.categorey}
    //   organization={e.Organizations[0].title}
    //   questions={e.Questions}
    // />)}

    // </> */
    // <div> Мои посты </div>


    <div className="card">

      <div className="card__header">
        <h1>{statusUpload}</h1>
        <form onSubmit={submintForm} noValidate autoComplete="off" encType="multipart/form-data" action="/profile">

          <div className="card__profile">
            <img
              src={img}

            />
          </div>
          <div className="card__name">
            <h2>Leo Bailey</h2>
            <div className="card__handle">

            </div>
          </div>
          <div className="card__button">
            <div >
              <input
                accept="image/*"

                id="contained-button-file"
                name="photo"
                type="file"
              />
              <label htmlFor="contained-button-file">
                <button variant="contained" color="primary" component="span">
                  Загрузить фото
                </button>
              </label>

              <input id="firstName" label="nickname" name="firstName" onChange={(e) => setNick(e.target.value)} value={nick} placeholder={nickname} />

              < button type="submint" variant="contained" color="primary">
                Изменить
              </button>
            </div>
      
         </div>
      </form>

        <hr className="border" />
        <nav>
          <ul className="navlinks">
            <li className="link__item">Мои посты</li>
            <li className="link__item">Избранное</li>
          </ul>
        </nav>
         </div>
<div>
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
     
      </div>
    </div>


  );

}
export default Profile

