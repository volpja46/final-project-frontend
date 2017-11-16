import React from 'react';
import Event from './Event';
import { Table, Container, Grid, Header } from 'semantic-ui-react';
import '../App.css';
import { connect } from 'react-redux';

const EventList = props => {
	const filteredEvents = props.events.filter(event => {
		return event.user_id === props.user_id;
	});

	const clearEmptyEvents = filteredEvents.filter(event => (event.name && event.budget && event.type_of_celebration !== ""))

	const eventTable = clearEmptyEvents.map((event, index) => (
		<Event
			key={index}
			id={event.id}
			eventData={event}
			handleRemove={props.handleRemove}
		/>
	));

	return eventTable.length > 0 ? (
		<Container>
			<h1 className="Pacifico">
				<center>Upcoming celebrations:</center>
			</h1>
			{eventTable}
		</Container>
	) : (
		<Grid
			style={{ height: '100%', marginTop: '1em', color: 'black' }}
			verticalAlign="middle"
			textAlign="center"
		>
			<center>
				<h1 className="Pacifico"> You haven't logged any events yet</h1>
			</center>
		</Grid>
	);
};

const mapStateToProps = state => {
	return {
		events: state.events.events,
		user_id: state.users.user_id
	};
};

export default connect(mapStateToProps)(EventList);
