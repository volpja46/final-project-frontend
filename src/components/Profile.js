import React from 'react';
import { connect } from 'react-redux';
import GiftContainer from './GiftContainer';
import Navbar from './Navbar';
import '../App.css';

const Profile = props => {
	return (
		<div className="Login" style={{ marginTop: '7em', color: 'black' }}>
			<Navbar />
			<h1 className="Pacifico">
				<center>Welcome, {props.username}!</center>
			</h1>
			<GiftContainer user_id={props.user_id} />
		</div>
	);
};
const mapStateToProps = state => ({
	username: state.users.username,
	user_id: state.users.user_id
});

export default connect(mapStateToProps)(Profile);
