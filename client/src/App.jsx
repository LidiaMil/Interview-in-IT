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
import PageInterview from './components/PageInterview/PageInterview';
import Header from './components/Header/Header';
import NewInterview from './components/NewInterview/NewInterview';
import Organization from './components/Organization/Organization'
import Profile from './components/Profile/Profile'
import Question from './components/Question/Question'
import { Upleft } from './components/mainComponent/Upleft'
import { Center } from './components/mainComponent/Center'
import { Downleft } from './components/mainComponent/Downleft'
import { Right } from './components/mainComponent/Right'
import Interview from './components/Interview/Interview'
import More from './components/More/More'
import OrganizationInterview from './components/OrganizationInterview/OrganizationInterview'
import Registry from './components/Registry/Registry'

//авторицация
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Container from '@mui/material/Container';

import { useDispatch } from 'react-redux'
import { setAuth } from '../../client/src/redux/actions/auth.action'



function App() {

  const dispatch = useDispatch()
  let history = useHistory()

  console.log(history);

  useEffect(() => {
    if (window.localStorage.getItem('state') === 'true') {
      console.log('привет из сессии', window.localStorage.getItem('state'));
      dispatch(setAuth())
    }
  }, [])

  
  return (
    <Router>

      <div className="job">
        <Header />

    
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route exact path="/interview/:id">
              <PageInterview />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/organization">
              <Organization />
            </Route>

            <Route exact path="/organization/:id">
              <OrganizationInterview />
            </Route>

            <Route exact path="/question">
              <Interview />
            </Route>

            <Route exact path="/question/:id">
              <More />
            </Route>

            <Route exact path="/newcomment/:id">
              <NewInterview />
            </Route>

            <Route exact path="/newcomment">
              <NewInterview />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/logout'>
              <Logout />
            </Route>

            <Route path='/registry'>
              <Registry />
            </Route>


          </Switch>
          </div>
    </Router>
  );
}

export default App;
