import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useHistory } from "react-router-dom";

import { useState, useEffect } from 'react';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NewPost from './components/NewPost/NewPost';
import Organization from './components/Organization/Organization'
import Profile from './components/Profile/Profile'
import Question from './components/Question/Question'
import {Upleft} from './components/mainComponent/Upleft'
import {Center} from './components/mainComponent/Center'
import {Downleft} from './components/mainComponent/Downleft'
import {Right} from './components/mainComponent/Right'
//авторицация
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Container from '@mui/material/Container';

import {useDispatch} from 'react-redux'
import { setAuth } from '../../client/src/redux/actions/auth.action'



function App() {
  
const dispatch = useDispatch()
let history = useHistory()

console.log(history);

useEffect(()=>{
    if(window.localStorage.getItem('state') === 'true'){
      console.log('привет из сессии', window.localStorage.getItem('state'));
      dispatch(setAuth())
  }
}, [])










  return (
    <Router>
      <Header />

      <div>
        <Switch>
{/* 
          <Route exact path="/login">
            <Login />
          </Route> */}
          
          <Route exact path="/">
            <Main />
          </Route>

          


          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/organization">
            <Organization />
          </Route>

          <Route exact path="/question">
            <Question />
          </Route>

          <Route exact path="/newpost">
            <NewPost />
          </Route>
        {/* авторизация логин */}
          <Route path='/login'>
              <Login />
           </Route>
           <Route path='/logout'>
              <Logout />
           </Route>


          <Route exact path="/main">
            <Main />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
