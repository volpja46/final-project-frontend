import React from 'react';
import Gift from './Gift';
import { Table, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

const GiftList = props => {
	const filteredGifts = props.gifts.filter(gift => {
		return gift.user_id === props.user_id;
	});

	const filteredSearchableGifts =
		filteredGifts.filter(gift => {
			return (
				gift.name.toLowerCase().match(props.searchTerm.toLowerCase()) ||
				gift.for_who.toLowerCase().match(props.searchTerm.toLowerCase()) ||
				gift.occasion.toLowerCase().match(props.searchTerm.toLowerCase()) ||
				gift.date.toLowerCase().match(props.searchTerm.toLowerCase()) ||
				gift.description.toLowerCase().match(props.searchTerm.toLowerCase())
			);
		}) || props.gifts;

		const clearEmptyGifts = filteredSearchableGifts.filter(gift => (gift.name && gift.for_who && gift.occasion !== ""))
		const giftTable = clearEmptyGifts.map((gift, index) => (
		<Gift
			key={index}
			id={gift.id}
			giftData={gift}
			removeGift={props.removeGift}
		/>
	));

	return props.gifts.length > 0 ? (
		<div>
			<h1>All gifts you have logged:</h1>
			<Container style={{ color: 'black' }}>
				<table style={{color:'black'}}className="ui padded inverted teal table">
					<tbody>
						<tr>
							<Table.HeaderCell className="aligned header" width={2}>
								Date
							</Table.HeaderCell>
							<Table.HeaderCell
								className="aligned header"
								color="teal"
								width={2}
							>
								Name
							</Table.HeaderCell>
							<Table.HeaderCell className="aligned header" width={2}>
								Occasion
							</Table.HeaderCell>
							<Table.HeaderCell className="aligned header" width={2}>
								From
							</Table.HeaderCell>
							<Table.HeaderCell className="aligned header" width={3}>
								Description
							</Table.HeaderCell>
							<Table.HeaderCell width={1} />
						</tr>
						{giftTable}
					</tbody>
				</table>
			</Container>
		</div>
	) : (
		<h1>You haven't logged any gifts yet</h1>
	);
};
// can use these props in THIS component!
const mapStateToProps = state => {
	return {
		gifts: state.gifts.gifts,
		user_id: state.users.user_id
	};
};

export default connect(mapStateToProps)(GiftList);
