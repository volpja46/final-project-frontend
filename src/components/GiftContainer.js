import React, { Component } from 'react';
import GiftList from './GiftList'

class GiftContainer extends Component {

	render() {
		return (
			<div>
    {this.props.gifts.length > 0 ? <h1>All gifts received</h1> : <h1>You haven't logged any gifts yet</h1>}
				<GiftList
					gifts={this.props.gifts}
				/>
			</div>
		);
	}
}

export default GiftContainer;
