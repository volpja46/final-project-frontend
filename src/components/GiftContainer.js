import React, { Component } from 'react';
import GiftList from './GiftList'

class GiftContainer extends Component {

	render() {
		return (
			<div style={{textAlign:'center', backgroundColor:'black', color:"teal"}}>
    {this.props.gifts.length > 0 ? <h1>All gifts you have loggged:</h1>
			 : <h1>You haven't logged any gifts yet</h1>}
				<GiftList
					gifts={this.props.gifts}
				/>
			</div>
		);
	}
}

export default GiftContainer;
