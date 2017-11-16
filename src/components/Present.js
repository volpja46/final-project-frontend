import React from 'react';
import {
	Button,
	Header,
	Segment,
	Form,
	Grid,
	Modal,
} from 'semantic-ui-react';
import { editThePresent } from '../actions/presents';
import { connect } from 'react-redux';
import '../App.css';
import { removeThePresent } from '../actions/presents';

class Present extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.presentData.purchased);
		this.state = {
			event_id: this.props.eventId,
			name: this.props.presentData.name,
			price: this.props.presentData.price,
			store: this.props.presentData.store,
			priority: this.props.presentData.priority,
			purchased: this.props.presentData.purchased,
			modalOpen: false
		};
	}

	handleOpen = () => this.setState({ modalOpen: true });

	handleRemove = event => {
		let presentId = parseInt(event.target.id);
		this.props.removeThePresent(presentId);
	};

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	handlePriceChange = event => {
		this.setState({
			price: event.target.value
		});
	};

	handleStoreChange = event => {
		this.setState({
			store: event.target.value
		});
	};

	handlePriorityChange = event => {
		this.setState({
			priority: event.target.value
		});
	};

	handleClose = () => this.setState({ modalOpen: false });

	completePurchase = event => {
		let presentId = parseInt(event.target.id);
		let editedPresent = this.props.presents.find(present => {
			return present.id === presentId;
		});
		let finalEditedPresent = {
			id: editedPresent.id,
			name: this.state.name,
			event_id: this.props.eventId,
			store: this.state.store,
			price: this.state.price,
			priority: this.state.priority,
			purchased: this.state.purchased
		};
		this.props.editThePresent(finalEditedPresent);
	};

	handlePurchase = event => {
		event.persist();
		this.setState(
			{
				purchased: !this.state.purchased
			},
			() => {
				this.completePurchase(event);
			}
		);
	};

	handleEdit = event => {
		event.preventDefault();
		this.handleClose(event);
		let presentId = parseInt(event.target.id);
		let editedPresent = this.props.presents.find(present => {
			return present.id === presentId;
		});

		let finalEditedPresent = {
			id: editedPresent.id,
			name: this.state.name,
			event_id: this.props.eventId,
			store: this.state.store,
			price: this.state.price,
			priority: this.state.priority,
			purchased: this.state.purchased
		};
		this.props.editThePresent(finalEditedPresent);
	};

	render() {
		console.log(this.state.purchased);
		return (
			<div className="card-container">
				<div className="card">
					<p>
						{this.props.presentData.purchased ? (
							<h3 style={{ color: 'teal' }}>Completed</h3>
						) : (
							<h3>Not yet purchased</h3>
						)}
					</p>
					<p>
						<b>Name:</b> {this.props.presentData.name}
					</p>
					<p>
						<b>Store:</b> {this.props.presentData.store}
					</p>
					<p>
						<b>Price:</b> ${this.props.presentData.price}
					</p>
					<p>
						<b>Priority:</b> {this.props.presentData.priority}
					</p>
					<label
						style={{
							color: 'teal',
							fontSize: '14px',
							// fontFamily: 'arial',
							margin: '2px'
						}}
					>
						<input
							type="checkbox"
							checked={this.state.purchased}
							style={{
								textAlign: 'center',
								marginRight: '0.4em',
								cursor: 'pointer',
								webkitTransform: 'scale(1.5)',
								padding: '10px'
							}}
							id={this.props.id}
							onChange={this.handlePurchase}
						/>
						<b>has this been purchased?</b>
					</label>
					<Modal
						style={{ display: 'block' }}
						size="small"
						trigger={
							<Button
								onClick={this.handleOpen}
								color="teal"
								size="medium"
								style={{ color: 'black', width: '7.6em', marginTop: '.40em'}}
								id={this.props.id}
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
								style={{ height: '100%', marginTop: '1em', color: 'black' }}
								verticalAlign="middle"
								textAlign="center"
							>
								<Segment padded centered>
									<Form>
										<Form.Group stacked={2}>
											<Form.Input
												onChange={this.handleNameChange}
												value={this.state.name}
												color="teal"
												placeholder="gift name"
												label="Gift"
											/>
											<Form.Input
												onChange={this.handleStoreChange}
												value={this.state.store}
												label="Store"
												placeholder="store"
											/>
											<br />
										</Form.Group>
										<Form.Group stackable={2}>
											<Form.Input
												onChange={this.handlePriceChange}
												value={this.state.price}
												label="Price"
												placeholder="price"
											/>
											<Form.Input
												onChange={this.handlePriorityChange}
												value={this.state.priority}
												label="priority"
												placeholder="priority"
											/>
										</Form.Group>
										<center>
											<Button
												id={this.props.id}
												onClick={this.handleEdit}
												type="submit"
												color="teal"
												className="ui black fluid button"
											>
												Submit
											</Button>{' '}
										</center>
									</Form>
								</Segment>
							</Grid>
						</Modal.Content>
					</Modal>
					<Button
						size="medium"
						color="teal"
						style={{
							color: 'black',
							width: '7.6em',
							marginTop: '0.2em'
						}}
						id={this.props.id}
						onClick={this.handleRemove}
					>
						delete gift
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		presents: state.presents.presents
	};
};

const mapDispatchToProps = {
	removeThePresent: removeThePresent,
	editThePresent: editThePresent
};

export default connect(mapStateToProps, mapDispatchToProps)(Present);
