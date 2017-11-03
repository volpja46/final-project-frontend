import React from 'react';
import Gift from './Gift';

const GiftList = props => {
	const gifts = props.gifts.map((gift, index) => {
		return <Gift giftData={gift} key={index} />;
	});
	return <ul>{gifts}</ul>;
};

export default GiftList;
