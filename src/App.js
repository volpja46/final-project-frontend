import React from 'react';
import { Route, withRouter } from 'react-router';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import HomePageLayout from './components/HomePageLayout';
import SignUpForm from './components/SignUpForm';
import './App.css';
import EventContainer from './components/EventContainer';
// import HTML5Backend from 'react-dnd-html5-backend';
// import PresentColumn from './components/PresentColumn';
// import { connect } from 'react-redux';
// import { DragDropContext } from 'react-dnd';

const App = props => {
	return (
		<div className="App">
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/" component={HomePageLayout} />
			<Route exact path="/login" component={LoginForm} />
			<Route exact path="/signup" component={SignUpForm} />
			<Route exact path="/events" component={EventContainer} />
		</div>
	);
};

// export default withRouter(DragDropContext(HTML5Backend)(App));
export default withRouter(App);
