import React, { Component } from 'react';
import {
	Button,
	Container,
	Header,
	Icon,
	Menu,
	Segment,
	Visibility,
	Image
} from 'semantic-ui-react';

const FixedMenu = () => (
	<Menu size="medium">
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

		let image = require(`../images/img.jpeg`);

		return (
			<div
				style={{
					width: '100%',
					color:'black'
				}}
			>
				{visible ? <FixedMenu /> : null}
				<Visibility
					onBottomPassed={this.showFixedMenu}
					onBottomVisible={this.hideFixedMenu}
					once={false}
				>
					<Menu
						size="medium"
						attached="top"
						color={'teal'}
						style={{
							width: '100%'
						}}
						inverted
						widths={4}
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
					<Container
						style={{ marginTop: '7em' }}
						className="Login"
						centered
						text
					>
						<Button
							style={{ marginBottom: '0em' }}
							onClick={this.handleLogin}
							outline="thick outset"
							size="large"
							color="teal"
						>
							<Image
								className="border"
								src={image}
								outline="thick outset"
								size="massive"
								centered
							/>
							<Icon size="large" name="heart" />
						</Button>
					</Container>
				</Visibility>
			</div>
		);
	}
}
