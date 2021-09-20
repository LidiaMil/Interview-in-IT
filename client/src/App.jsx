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
import Interview from './components/Interview/Interview'
import More from './components/More/More'
import OrganizationInterview from './components/OrganizationInterview/OrganizationInterview'

//авторицация
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Container from '@mui/material/Container';



function App() {
  return (
    <Router>
      <Header />

      <Container style={{color:'red'}}>
        <Switch>
          
          <Route exact path="/">
            <Main />
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

          <Route exact path="/newpost">
            <NewPost />
          </Route>
    
          <Route path='/login'>
              <Login />
           </Route>
           <Route path='/logout'>
              <Logout />
           </Route>


        </Switch>
      </Container>
    </Router>
  );
}

export default App;
