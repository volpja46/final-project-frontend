import React from 'react';
import { Button, Header, Segment, Form, Grid, Modal } from 'semantic-ui-react';
import GiftModal from './GiftModal';
import { editTheEvent } from '../actions/events';
import { connect } from 'react-redux';
import AddPresentModal from './AddPresentModal';
import '../App.css';
import PresentContainer from './PresentContainer';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

class Event extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: this.props.user_id,
			name: this.props.eventData.name,
			date: this.props.eventData.date,
			type_of_celebration: this.props.eventData.type_of_celebration,
			budget: this.props.eventData.budget,
			modalOpen: false
		};
	}

	handleOpen = () => this.setState({ modalOpen: true });

	handleBudgetChange = event => {
		this.setState({
			budget: event.target.value
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

	onClick = e => {
		e.preventDefault();
		this.setState({ showPresents: !this.state.showPresents });
	};

	handleClose = () => this.setState({ modalOpen: false });

	handleEdit = event => {
		this.handleClose(event);
		let eventId = parseInt(event.target.id);
		let editedEvent = this.props.events.find(event => {
			return event.id === eventId;
		});
		let finalEditedEvent = {
			id: editedEvent.id,
			name: this.state.name,
			date: this.state.date,
			type_of_celebration: this.state.type_of_celebration,
			user_id: this.props.user_id,
			budget: this.state.budget
		};
		this.props.editTheEvent(finalEditedEvent);
	};

	moneyInBudget = () => {
		let presents = this.props.presents.filter(present => {
			return present.event_id === this.props.id;
		});
		var sumOfPresents = [];
		let sum = presents.map(present => {
			return sumOfPresents.push(present.price);
		});
		const total = sumOfPresents.reduce((sum, value) => sum + value, 0);
		return this.props.eventData.budget - total;
	};

	getDate = () => {
		var now = moment(new Date());
		var end = moment(this.props.eventData.date);
		var diffDays = end.diff(now, 'days') + 1;
		if (diffDays > 0) {
			return (diffDays += ' shopping day(s) left');
		} else if (diffDays < 0) {
			diffDays = Math.abs(diffDays);
			return (diffDays += ' days since this event ended');
		}
	};

	render() {
		return this.moneyInBudget() > 0 ? (
			<div className="Events">
			<div><Button
				color="grey"
				size="medium"
				style={{ color: 'black', width: '3.5em', marginLeft:'42em', marginTop:'1em'}}
				id={this.props.id}
				onClick={this.props.handleRemove}
			>
				x
			</Button></div>
			<div><i class="fa fa-gift fa-spin fa-3x" aria-hidden="true" style={{marginTop:'0.3em'}}></i>
			<i class="fa fa-gift fa-spin fa-3x" aria-hidden="true"></i>
			<i class="fa fa-gift fa-spin fa-3x" aria-hidden="true"></i></div>
				<h2 className="Oxygen">
					<b>You have ${this.moneyInBudget()}</b> left in your budget
				</h2>
				<p>
					<b>Date:</b> {this.props.eventData.date}
				</p>
				<p>
					<b>For who:</b> {this.props.eventData.name}
				</p>
				<p>
					<b>Type of celebration:</b> {this.props.eventData.type_of_celebration}
				</p>
				<p>
					<b>Budget:</b> ${this.props.eventData.budget}
				</p>
				<div><Modal
					style={{ display: 'block' }}
					size="small"
					trigger={
						<Button
							onClick={this.handleOpen}
							size="medium"
							color="teal"
							style={{ color: 'black', width: '7.6em' }}
							id={this.props.id}
						>
							edit event details
						</Button>
					}
					open={this.state.modalOpen}
					onClose={this.handleClose}
					basic
					closeIcon
				>
					<Header
						icon="event"
						align="center"
						size="huge"
						color="teal"
						content="Update this event"
					/>
					<Modal.Content>
						<Grid
							style={{ height: '100%', marginTop: '1em', color: 'black' }}
							verticalAlign="middle"
							textAlign="center"
						>
							<Segment padded centered>
								<Form onSubmit={this.props.handleSubmit}>
									<Form.Group stacked={2}>
										<Form.Input
											value={this.state.name}
											onChange={this.handleNameChange}
											color="teal"
											label="For who?"
										/>
										<Form.Input
											value={this.state.budget}
											onChange={this.handleBudgetChange}
											color="teal"
											label="Budget"
										/>
									</Form.Group>
									<Form.Group stackable={2}>
										<Form.Input
											value={this.state.type_of_celebration}
											onChange={this.handletypeOfCelebrationChange}
											label="Type of Celebration"
										/>
										<Form.Input
											value={this.state.date}
											onChange={this.handleDateChange}
											label="Date"
											placeholder="ex: 2018-01-30"
										/>
									</Form.Group>
									<Button
										id={this.props.id}
										onClick={this.handleEdit}
										type="submit"
										color="teal"
										className="ui fluid button"
									>
										Submit
									</Button>
								</Form>
							</Segment>
						</Grid>
					</Modal.Content>
				</Modal>
				<AddPresentModal eventId={this.props.id} /></div>
				<PresentContainer eventId={this.props.id} />
			</div>
		) : (
			<div className="Events">
			<div><Button
				color="grey"
				size="medium"
				style={{ color: 'black', width: '3.5em', marginLeft:'42em', marginTop:'1em'}}
				id={this.props.id}
				onClick={this.props.handleRemove}
			>
				x
			</Button></div>
			<div><i class="fa fa-gift fa-spin fa-3x" aria-hidden="true" style={{marginTop:'0.3em'}}></i>
			<i class="fa fa-gift fa-spin fa-3x" aria-hidden="true"></i>
			<i class="fa fa-gift fa-spin fa-3x" aria-hidden="true"></i></div>
				<h1>{this.getDate()}</h1>
				<h2 style={{ color: 'red' }}>
					You went over your budget by ${this.moneyInBudget()}
				</h2>
				<p>
					<b>Date:</b> {this.props.eventData.date}
				</p>
				<p>
					<b>For who:</b> {this.props.eventData.name}
				</p>
				<p>
					<b>Type of celebration:</b> {this.props.eventData.type_of_celebration}
				</p>
				<p>
					<b>Budget:</b> ${this.props.eventData.budget}
				</p>
				<div><AddPresentModal eventId={this.props.id} />
				<Modal
					style={{ display: 'block' }}
					size="small"
					trigger={
						<Button
							onClick={this.handleOpen}
							size="medium"
							color="teal"
							style={{ color: 'black', width: '7.6em' }}
							id={this.props.id}
						>
							edit event details
						</Button>
					}
					open={this.state.modalOpen}
					onClose={this.handleClose}
					basic
					closeIcon
				>
					<Header
						icon="event"
						align="center"
						size="huge"
						color="teal"
						content="Update this event"
					/>
					<Modal.Content>
						<Grid
							style={{ height: '100%', marginTop: '1em', color: 'black' }}
							verticalAlign="middle"
							textAlign="center"
						>
							<Segment padded centered>
								<Form onSubmit={this.props.handleSubmit}>
									<Form.Group stacked={2}>
										<Form.Input
											value={this.state.name}
											onChange={this.handleNameChange}
											color="teal"
											label="For who?"
										/>
										<Form.Input
											value={this.state.budget}
											onChange={this.handleBudgetChange}
											color="teal"
											label="Budget"
										/>
									</Form.Group>
									<Form.Group stackable={2}>
										<Form.Input
											value={this.state.type_of_celebration}
											onChange={this.handletypeOfCelebrationChange}
											label="Type of Celebration"
										/>
										<Form.Input
											value={this.state.date}
											onChange={this.handleDateChange}
											label="Date"
											placeholder="ex: 2018-01-30"
										/>
									</Form.Group>
									<Button
										id={this.props.id}
										onClick={this.handleEdit}
										type="submit"
										color="teal"
										className="ui fluid button"
									>
										Submit
									</Button>
								</Form>
							</Segment>
						</Grid>
					</Modal.Content>
				</Modal>
				<PresentContainer eventId={this.props.id} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events.events,
		user_id: state.users.user_id,
		presents: state.presents.presents
	};
};

const mapDispatchToProps = {
	editTheEvent: editTheEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
