import React from 'react';
import { Route, withRouter } from 'react-router'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import HomePageLayout from './components/HomePageLayout'
import SignUpForm from './components/SignUpForm'
import './App.css';
// import AddGiftForm from './components/AddGiftForm'
// import Authorized from "./components/Authorized";
// const authorizedProfile = Authorized(Profile);

const App = (props) => {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={HomePageLayout} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />
    </div>
  )
}

export default withRouter(App);
