import React from 'react';
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

class LoginForm extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		});
	};

	handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		});
	};

	handleLogin = () => {
		this.props.loginUser(this.state.username, this.state.password);
		this.redirect();
	};

	redirect = () => {
		this.props.history.push('/profile');
	};

	render() {
		return (
			<div
				className="login-form">
				<style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%; color:black
        }
      `}</style>
				<Header as="h1" color="teal" textAlign="center">
					<Image src="/logo.png" />
					<center>Login to your account</center>
				</Header>
				<Form size="medium">
					<Segment>
						<Form.Input
							onChange={this.handleUsernameChange}
							fluid
							icon="user"
							iconPosition="left"
							placeholder="Username"
						/>
						<Form.Input
							onChange={this.handlePasswordChange}
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>
						<Button onClick={this.handleLogin} color="teal" fluid size="large">
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					Don't have an account yet?{' '}
					<center>
						{' '}
						<a href="signup"> Sign Up Here!</a>
					</center>
				</Message>
			</div>
		);
	}
}
export default withRouter(connect(null, { loginUser })(LoginForm));
