import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setAuth } from '../../redux/actions/auth.action'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


function Login(){

  const responseGoogle = (response) => {
    console.log(response);
  }

  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const history = useHistory()

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  function handleChange({target: {name, value}}){
    setInputs({
      ...inputs,
      [name]: value,

    })
  }

  async function handleSubmit(event){
    event.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/login',
      data: {
        email,
        password 
      }
    })
      .then((data) => {
        console.log(data);
        dispatch(setAuth())
        history.push('/')
        
      }
      )
      .catch(() => setError('Повторите вход'))
  } 




  const {email, password} = inputs 



  return (


<div class="login">
	<h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <input type="email" placeholder="email" autofocus name="email" required onChange={handleChange} value={email}></input>
    <input type="password" placeholder="password" name="password" type="password" required onChange={handleChange} value={password}></input>
        <button type="submit" class="btn btn-primary btn-block btn-large">Войти</button>
    </form>
</div>







// <div class="wrapper">
//   <form class="login" onSubmit={handleSubmit}>
//     <p class="title">Log in</p>
//     <input type="email" placeholder="email" autofocus name="email" required onChange={handleChange} value={email}></input>
//     <i class="fa fa-user"></i>
//     <input type="password" placeholder="password" name="password" type="password" required onChange={handleChange} value={password}></input>
//     <i class="fa fa-key"></i>
//     <a href="#">Forgot your password?</a>
//     <button type ="submit">
//       <i class="spinner"></i>
//       <span class="state">Войти</span>
//     </button>
//   </form>
//   <footer><a target="blank" href="http://boudra.me/">Киты</a></footer>
// </div>


    

  //   <form onSubmit={handleSubmit}>
  //   <div className="search-job">
  //   <svg class="svg-icon" viewBox="0 0 20 20">
	// 						<path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
	// 					</svg>
  //   <input type="email" placeholder="email" name="email" required onChange={handleChange} value={email}></input>
  //  </div>
  //  <div className="search-salary">
  //  <svg class="svg-icon" viewBox="0 0 20 20">
	// 						<path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
	// 					</svg>
  //   <input type="text" placeholder="password" name="password" type="password" required onChange={handleChange} value={password}></input>
  //  </div>
  //  <button className="search-button" type ="submit">Войти</button>
  //  <div className="error">Тут ошибка: {error}</div>
  //  <Link to="/">Домой</Link>
  // </form>




    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Email:
    //     <input name="email" type="email" required onChange={handleChange} value={email}></input>
    //   </label>
    //   <label>
    //     Password:
    //     <input name="password" type="password" required onChange={handleChange} value={password}></input>
    //   </label>
    //   <button type ="submit">Signin</button>
    //   <div classNameName="error">Тут ошибка: {error}</div>
    //   <Link to="/">Домой</Link>
    // </form>


  )


  }

export default Login
