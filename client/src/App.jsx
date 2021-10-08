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
import OneInterview from "./components/OneInterview/OneInterview";
import PageInterview from './components/PageInterview/PageInterview';
import Header from './components/Header/Header';
import NewInterview from './components/NewInterview/NewInterview';
import Organization from './components/Organization/Organization'
import Profile from './components/Profile/Profile'
import Question from './components/Question/Question'
import Interview from './components/Interview/Interview'
import More from './components/More/More'
import OrganizationInterview from './components/OrganizationInterview/OrganizationInterview'
import Registry from './components/Registry/Registry'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'

import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../client/src/redux/actions/auth.action'

function App() {

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.isAuntificated)
  useEffect(() => {
    if (window.localStorage.getItem('user_id')) {
      dispatch(setAuth())
    }
  }, [])

  return (
    <Router>
      <div className="job">
        <Header />

        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/interview/:id">
              <PageInterview />
            </Route>
            <Route exact path="/profile">
              {isAuthenticated ? <Profile /> : <Login />}
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
            <Route exact path="/interview/:id">
              <Question />
            </Route>
            <Route exact path="/interview/:id">
              <OneInterview />
            </Route>
            <Route exact path="/question/:id">
            {!isAuthenticated ? <Login /> : <More />}
            </Route>
            <Route exact path="/newcomment/:id">
              <NewInterview />
            </Route>
            <Route exact path="/newcomment">
              {!isAuthenticated ? <Login /> : <NewInterview />}


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
      </div>
    </Router>
  );
}
export default App;
