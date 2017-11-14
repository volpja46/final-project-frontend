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
	<Menu
		fixed="absolute"
		style={{
			width: '100%'
		}}
	>
		<Container>
			<Menu.Item as="a" active>
				Home
			</Menu.Item>
			<Menu.Menu>
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
			<div
				style={{
					width: '100%'
				}}
			>
				{visible ? <FixedMenu /> : null}
				<Visibility
					onBottomPassed={this.showFixedMenu}
					onBottomVisible={this.hideFixedMenu}
					once={false}
				>
					<Container>
						<Menu
							attached="top"
							color={'teal'}
							style={{
								width: '100%'
							}}
							inverted
							widths={3}
						>
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
				</Visibility>
			</div>
		);
	}
}
