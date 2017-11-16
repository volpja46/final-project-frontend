import React from 'react';
import { Route, withRouter } from 'react-router';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import HomePageLayout from './components/HomePageLayout';
import SignUpForm from './components/SignUpForm';
import './App.css';
import EventContainer from './components/EventContainer';
import 'semantic-ui-css/semantic.min.css'
import authorized from './components/Authorized'


const App = props => {
	const AuthLoginForm = authorized(LoginForm)
	const AuthProfile = authorized(Profile)
	return (
		<div className="App">
			<Route exact path="/profile" component={AuthProfile} />
			<Route exact path="/" component={HomePageLayout} />
			<Route exact path="/login" component={AuthLoginForm} />
			<Route exact path="/signup" component={SignUpForm} />
			<Route exact path="/events" component={EventContainer} />
		</div>
	);
};

// export default withRouter(DragDropContext(HTML5Backend)(App));
export default withRouter(App);
/// connect app so that it looks for currentUser
