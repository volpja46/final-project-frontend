import React, { Component } from 'react';
import {
	Button,
	Container,
	Header,
	Icon,
	Menu,
	Segment,
	Visibility
} from 'semantic-ui-react';

const FixedMenu = () => (
	<Menu fixed="top" size="large">
		<Container>
			<Menu.Item as="a" active>
				Home
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item className="item">
					<Button as="a">Log in</Button>
				</Menu.Item>
				<Menu.Item>
					<Button as="a" primary>
						Sign Up
					</Button>
				</Menu.Item>
			</Menu.Menu>
		</Container>
	</Menu>
);

export default class HomePageLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleLogin = () => {
		this.props.history.push('/login');
	};

	handleSignUp = () => {
		this.props.history.push('/signup');
	};

	hideFixedMenu = () => this.setState({ visible: false });
	showFixedMenu = () => this.setState({ visible: true });

	render() {
		const { visible } = this.state;

		return (
			<div>
				{visible ? <FixedMenu /> : null}

				<Visibility
					onBottomPassed={this.showFixedMenu}
					onBottomVisible={this.hideFixedMenu}
					once={false}
				>
					<Segment
						textAlign="center"
						style={{ minHeight: 700, padding: '1em 0em' }}
						vertical
					>
						<Container>
							<Menu color={'teal'} inverted widths={3}>
								<Menu.Item as="a" active>
									Home
								</Menu.Item>
								<Menu.Item position="right">
									<Button color="teal" onClick={this.handleLogin} as="a">
										Log in
									</Button>
									<Button
										color="teal"
										onClick={this.handleSignUp}
										as="a"
										style={{ marginLeft: '0.75em' }}
									>
										Sign Up
									</Button>
								</Menu.Item>
							</Menu>
						</Container>

						<Container centered text>
							<Header
								as="h1"
								color="black"
								content="Gift Organizer"
								inverted
								style={{
									color: 'black',
									fontSize: '4em',
									fontWeight: 'normal',
									marginBottom: 0,
									marginTop: '3em',
									textAlign: 'center'
								}}
							/>
							<Header
								as="h2"
								content="Keep track of your gifts"
								inverted
								style={{ fontSize: '1.7em', fontWeight: 'normal' }}
							/>
							<Button onClick={this.handleSignUp} size="huge" color="teal">
								Get Started
								<Icon name="right arrow" />
							</Button>
						</Container>
					</Segment>
				</Visibility>
			</div>
		);
	}
}
