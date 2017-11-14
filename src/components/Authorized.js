import Profile from '/.Profile';
import LoginForm from '/.LoginForm';
import React, { Component } from 'react';

export default function Authorized(Profile) {
	return class extends Component {
		render() {
			if (auth.isAuthenticated()) {
				return <Profile {...this.props} />;
			} else {
				return <LoginForm />;
			}
		}
	};
}
