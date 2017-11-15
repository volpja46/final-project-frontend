import React from 'react';
import EventList from './EventList';
import { Grid } from 'semantic-ui-react';
import '../App.css';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getEvents } from '../actions/events';
import { getPresents } from '../actions/presents';
import { addEvent } from '../actions/events';
import { removeTheEvent } from '../actions/events';
import AddEventModal from './AddEventModal';

class EventContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: props.user_id,
			name: '',
			date: '',
			type_of_celebration: '',
			budget: ''
		};
	}

	componentDidMount = () => {
		this.props.getEvents();
		this.props.getPresents();
	};

	handleBudgetChange = event => {
		this.setState({
			budget: parseInt(event.target.value)
		});
	};

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	handleDateChange = event => {
		this.setState({
			date: event.target.value
		});
	};

	handletypeOfCelebrationChange = event => {
		this.setState({
			type_of_celebration: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let newEvent = {
			name: this.state.name,
			date: this.state.date,
			user_id: this.props.user_id,
			type_of_celebration: this.state.type_of_celebration,
			budget: this.state.budget
		};
		this.props.addEvent(newEvent);
	};

	handleRemove = event => {
		let eventId = parseInt(event.target.id);
		this.props.removeTheEvent(eventId);
	};

	render() {
		return (
			<div className="Login">
				<Navbar />
				<Grid
					style={{ height: '50%', marginTop: '7em', marginLeft: '0.50em' }}
					verticalAlign="middle"
					textAlign="center"
				>
					<EventList
						handleRemove={this.handleRemove}
						events={this.props.events}
					/>
				</Grid>
				<AddEventModal
					handleNameChange={this.handleNameChange}
					handleDateChange={this.handleDateChange}
					handleBudgetChange={this.handleBudgetChange}
					handletypeOfCelebrationChange={this.handletypeOfCelebrationChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events.events,
		username: state.users.username,
		user_id: state.users.user_id
	};
};

const mapDispatchToProps = {
	getEvents: getEvents,
	addEvent: addEvent,
	removeTheEvent: removeTheEvent,
	getPresents: getPresents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
