import React from 'react';
import Present from './Present';
import { DropTarget } from 'react-dnd';

const PresentColumn = ({ presents, eventId }) => {
	const presentItems = presents.map(present => {
		return (
			<Present
				key={present.id}
				id={present.id}
				eventId={eventId}
				presentData={present}
			/>
		);
	});
	return (
		<div
			style={{
				border: 'solid thin black',
				display: 'flex',
				backgroundColor: 'red'
			}}
		>
			{presentItems}
		</div>
	);
};

export default PresentColumn;
//
// const presentsTable = filteredPresents.map((present, index) => (
//   <Present
//     key={index}
//     id={present.id}
//     eventId={this.props.eventId}
//     presentData={present}
//   />
// ));
