import React, { Component } from 'react';
import EventList from './EventList'

class EventContainer extends Component {

 constructor (props) {
   super(props)
 }

	render() {
    console.log(this.props)
		return (
			<div style={{textAlign:'center', backgroundColor:'black', color:"teal"}}>
				<EventList
					events={this.props.events}
				/>
			</div>
		);
	}
}

export default EventContainer;
