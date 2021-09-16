import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NewPost from './components/NewPost/NewPost';
import Organization from './components/Organization/Organization'
import Profile from './components/Profile/Profile'
import Question from './components/Question/Question'

function App() {
  return (
    <Router>
      <Header />

      <div className="row my-3">
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

        </Switch>
      </div>
    </Router>
  );
}

export default App;
