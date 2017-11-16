import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

// const AuthLoginForm = authorized(LoginForm)
// <AuthLoginForm  beef="steak"/>

/// is that a higher component is a function that creates a component
export default function authorized(RenderedComponent) {

	return class extends Component {
		render() {
			const { pathname } = this.props.location
				/// if im logged in do something
		 // 1 . -> If im logged in can I get to /login  -> No
		 // 2. -> If im not logged where can I go / & /login & /signup
		 // 3. -> If im logged in and im anywhere else I'm good or I'm im logged in and at /login or /signup im also good
			if (localStorage.getItem('token') && (pathname === "/login" || pathname === "/signup") )  {
				return <Redirect to="/profile"/>
			} else if (!(localStorage.getItem('token')) && !(pathname === "/login" || pathname === "/signup" || pathname === "/")) {
				return <Redirect to="/login"/>
			} else {
				return <RenderedComponent {...this.props}/>
			}
			// if (auth.isAuthenticated()) {
			// 	return <Profile {...this.props} />;
			// } else {
			// 	return <LoginForm />;
			// }
		}
	};
}
