import React from 'react';
import { Button, Header, Segment, Form, Grid, Modal } from 'semantic-ui-react';
import { editTheGift } from '../actions/gifts';
import { connect } from 'react-redux';
import '../App.css'

class Gift extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: this.props.user_id,
			name: this.props.giftData.name,
			date: this.props.giftData.date,
			description: this.props.giftData.description,
			photo: '',
			for_who: this.props.giftData.for_who,
			occasion: this.props.giftData.occasion,
			modalOpen: false
		};
	}

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	handleDescriptionChange = event => {
		this.setState({
			description: event.target.value
		});
	};

	handleDateChange = event => {
		this.setState({
			date: event.target.value
		});
	};

	handleFromWhoChange = event => {
		this.setState({
			for_who: event.target.value
		});
	};

	handleOccasionChange = event => {
		this.setState({
			occasion: event.target.value
		});
	};

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = event => {
		this.setState({
			modalOpen: false
		});
		this.handleEdit(event);
	};

	handleEdit = event => {
		let giftId = parseInt(event.target.id);
		let editedGift = this.props.gifts.find(gift => {
			return gift.id === giftId;
		});
		let finalEditedGift = {
			id: editedGift.id,
			name: this.state.name,
			occasion: this.state.occasion,
			date: this.state.date,
			for_who: this.state.for_who,
			description: this.state.description,
			photo: this.state.photo,
			user_id: this.props.user_id
		};
		this.props.editTheGift(finalEditedGift);
	};

	render() {
		let image = require(`../images/thankyou.png`);

		return (
			<tr style={{color:'black'}}>
				<td>{this.props.giftData.date}</td>
				<td>{this.props.giftData.name}</td>
				<td>{this.props.giftData.occasion}</td>
				<td>{this.props.giftData.for_who}</td>
				<td>{this.props.giftData.description}</td>
				<td>
					<a
						href="mailto:putyouremailhere.com?subject=Thanks!
&body=Thank you so much for your thoughtful gift!"
						style={{ color: 'black' }}
					>
					send a thank you
					</a>
					<Modal
					size="small"
						trigger={
							<Button
								onClick={this.handleOpen}
								size="medium"
								id={this.props.id}
								style={{ marginLeft:'.6em', marginTop: '0.1em', color:'black', width: '7.6em'}}
								color="teal"
							>
								edit gift
							</Button>
						}
						open={this.state.modalOpen}
						onClose={this.handleClose}
						basic
					>
						<Header
							icon="gift"
							align="center"
							size="huge"
							color="teal"
							content="Update your gift"
						/>
						<Modal.Content>
							<Grid
								style={{ height: '100%', marginTop: '1em'}}
								verticalAlign="middle"
								textAlign="center" color='black'
							>
								<Segment padded centered>
									<Form onSubmit={this.props.handleSubmit}>
										<Form.Group stacked={2}>
											<Form.Input
												onChange={this.handleNameChange}
												value={this.state.name}
												color="teal"
												label="Gift"
											/>
											<Form.Input
												onChange={this.handleFromWhoChange}
												value={this.state.for_who}
												label="Received from"
											/>
											<br />
										</Form.Group>
										<Form.Group stackable={2}>
											<Form.Input
												onChange={this.handleOccasionChange}
												value={this.state.occasion}
												label="Occasion"
											/>
											<Form.Input
												onChange={this.handleDateChange}
												value={this.state.date}
												label="Date"
												placeholder="ex: 2018-01-30"
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.TextArea
												onChange={this.handleDescriptionChange}
												value={this.state.description}
												type="text area"
												label="Description"
											/>
										</Form.Group>
										<center>
											<Button
												id={this.props.id}
												onClick={this.handleClose}
												type="submit"
												color="teal"
												className="ui black fluid button"
											>
												Submit
											</Button>
										</center>
									</Form>
								</Segment>
							</Grid>
						</Modal.Content>
					</Modal>
					<Button
					class="ui teal button"
						size="medium"
						color="white"
						style={{
							color: 'black',
							width: '7.6em',
							marginBottom: '.20em',
							marginTop: '.20em',
							marginLeft:'.6em'
						}}
						id={this.props.id}
						onClick={this.props.removeGift}
					>
						delete gift
					</Button>
				</td>
			</tr>
		);
	}
}

const mapStateToProps = state => {
	debugger
	return {
		gifts: state.gifts.gifts,
		user_id: state.users.user_id
	};
};

const mapDispatchToProps = {
	editTheGift: editTheGift
};

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
