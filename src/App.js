import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import HomePageLayout from './components/HomePageLayout'
import './App.css';
// import AddGiftForm from './components/AddGiftForm'

// import Authorized from "./components/Authorized";
// const authorizedProfile = Authorized(Profile);

const App = () => {
  return (
    <div>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={HomePageLayout} />
      <Route exact path="/login" component={LoginForm} />
    </div>
  )
}

export default App;
