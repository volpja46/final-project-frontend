import React from 'react';

const Gift = props => {
	return (
		<div>
			Name: {props.giftData.name}<br/>
			Received from: {props.giftData.for_who}<br/>
			Description: {props.giftData.description}<br/>
			Occasion: {props.giftData.occasion}<br/>
			<img src={props.giftData.photo} width="125" height="100"/>
		</div>
	);
};

export default Gift;
