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
import { signUpUser } from '../actions/user';

class SignUpForm extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

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

	handleSignUp = event => {
		event.preventDefault();
		let newUser = {
			username: this.state.username,
			password: this.state.password
		};

		let userCreateParams = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		};

		fetch(`http://localhost:3000/api/v1/users`, userCreateParams)
			.then(resp => resp.json())
			.then(resp => console.log(resp));
	};

	redirect = () => {
		this.props.history.push('/profile');
	};

	render() {
		return (
			<div style={{ marginTop: '15em' }}>
				<style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>

				<Header as="h1" color="teal" textAlign="center">
					<Image src="/logo.png" />
					<center>Please create an account</center>
				</Header>
				<Form size="large">
					<Segment stacked>
						<Form.Input
							onChange={this.handleUsernameChange}
							icon="user"
							iconPosition="left"
							label="Select a username"
						/>
						<Form.Input
							onChange={this.handlePasswordChange}
							fluid
							icon="lock"
							iconPosition="left"
							label="Select a password"
							type="password"
						/>

						<Button onClick={this.handleSignUp} color="teal" fluid size="large">
							Create account
						</Button>
					</Segment>
				</Form>
				<Message>
					Already have an account?{' '}
					<center>
						{' '}
						<a href="login">Login here!</a>
					</center>
				</Message>
			</div>
		);
	}
}

export default withRouter(connect(null, { signUpUser })(SignUpForm));
