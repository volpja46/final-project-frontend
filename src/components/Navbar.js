import React, { Component } from 'react';
import { Button, Container, Menu, Visibility } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import '../App.css';

const FixedMenu = () => (
	<Menu fixed="top" size="massive">
		<Container>
			<Menu.Item as="a" active>
				Home
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item className="item">
					<Button as="a">Profile</Button>
				</Menu.Item>
				<Menu.Item>
					<Button as="a" primary>
						Upcoming Celebrations
					</Button>
				</Menu.Item>
			</Menu.Menu>
		</Container>
	</Menu>
);

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleHome = () => {
		this.props.history.push('/');
	};

	handleProfile = () => {
		this.props.history.push('/profile');
	};

	handleEvents = () => {
		this.props.history.push('/events');
	};

	handleLogOut = () => {
		this.props.history.push('/');
	};

	hideFixedMenu = () => this.setState({ visible: false });
	showFixedMenu = () => this.setState({ visible: true });

	render() {
		const { visible } = this.state;
		// let image = require(`../images/logo.jpg`);

		return (
			<div id="navbar">
				{visible ? <FixedMenu /> : null}

				<Visibility
					onBottomPassed={this.showFixedMenu}
					onBottomVisible={this.hideFixedMenu}
					once={false}
				>
					<Menu size="medium" color={'teal'} inverted secondary>
						<Menu.Item width={2} />
						<Menu.Item width={4} onClick={this.handleHome} as="a" active>
							Home
						</Menu.Item>
						<Menu.Item>
							<Button
								width={4}
								color="teal"
								onClick={this.handleProfile}
								as="a"
							>
								Profile
							</Button>
						</Menu.Item>
						<Menu.Item>
							<Button width={4} color="teal" onClick={this.handleEvents} as="a">
								Upcoming Celebrations
							</Button>
						</Menu.Item>
						<Menu.Item position="right">
							<Button color="teal" onClick={this.handleLogOut} as="a">
								Log out
							</Button>
						</Menu.Item>
					</Menu>
				</Visibility>
			</div>
		);
	}
}

export default withRouter(Navbar);
