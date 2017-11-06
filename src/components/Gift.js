import React from 'react';

const Gift = props => {
	return (
			<tr>
				<td>{props.giftData.date}</td>
				<td>{props.giftData.name}</td>
				<td>{props.giftData.occasion}</td>
				<td>{props.giftData.for_who}</td>
				<td>{props.giftData.description}</td>
		</tr>
	);
};

export default Gift;
