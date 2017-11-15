import React from 'react';
import GiftList from './GiftList';
import SearchBar from './Search';
import { Grid } from 'semantic-ui-react';
import '../App.css';
import GiftModal from './GiftModal';
import { getGifts } from '../actions/gifts';
import { addGift } from '../actions/gifts';
import { connect } from 'react-redux';
import { removeTheGift } from '../actions/gifts';

class GiftContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: props.user_id,
			name: '',
			date: '',
			description: '',
			photo: '',
			for_who: '',
			occasion: '',
			searchTerm: ''
		};
	}

	componentDidMount = () => {
		this.props.getGifts();
	};

	handleSearchChange = event => {
		this.setState({
			searchTerm: event.target.value.toLowerCase()
		});
	};

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

	handleSubmit = event => {
		event.preventDefault();
		let newGift = {
			name: this.state.name,
			description: this.state.description,
			date: this.state.date,
			user_id: this.props.user_id,
			for_who: this.state.for_who,
			occasion: this.state.occasion
		};
		this.props.addGift(newGift);
	};

	handleRemove = event => {
		let giftId = parseInt(event.target.id);
		this.props.removeTheGift(giftId);
	};

	render() {
		return (
			<div>
				<Grid
					style={{ height: '100%', marginTop: '1em' }}
					verticalAlign="middle"
					textAlign="center"
				>
					<SearchBar
						SearchTerm={this.state.filter}
						handleSearchChange={this.handleSearchChange}
					/>
					<GiftList
						searchTerm={this.state.searchTerm}
						gifts={this.props.gifts}
						removeGift={this.handleRemove}
					/>
				</Grid>
				<GiftModal
					handleNameChange={this.handleNameChange}
					handleDescriptionChange={this.handleDescriptionChange}
					handleDateChange={this.handleDateChange}
					handleFromWhoChange={this.handleFromWhoChange}
					handleOccasionChange={this.handleOccasionChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		gifts: state.gifts.gifts,
		user_id: state.users.user_id
	};
};

const mapDispatchToProps = {
	getGifts: getGifts,
	addGift: addGift,
	removeTheGift: removeTheGift
};

export default connect(mapStateToProps, mapDispatchToProps)(GiftContainer);
