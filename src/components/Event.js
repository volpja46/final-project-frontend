import React from 'react';
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import GiftModal from './GiftModal'
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';


class Event extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
	return (
			<tr>
				<td>{this.props.eventData.date}</td>
				<td>{this.props.eventData.name}</td>
				<td>{this.props.eventData.type_of_celebration}</td>
				<td>
					<Button size="medium" style={{color:'black', width:'7.6em', marginBottom:'.20em'}} id={this.props.eventData.id}  onClick={this.props.handleRemove}>remove event</Button>
					<Modal  style={{display: 'block'}} size="small" trigger={<Button size="medium" style={{color:'black', width:'7.6em'}} id={this.props.id}>edit gift</Button>}
					closeIcon>
					<Header icon='gift' align="center" size="huge" color="teal" content='Update your event' />
					<Modal.Content>
					<Form  onSubmit={this.props.handleSubmit}>
					<Form.Group stacked={2}>
						<Form.Input onChange ={this.props.handleNameChange}  color="teal" label='For who'  />
					</Form.Group>
					<Form.Group stackable={2}>
						<Form.Input   onChange={this.props.handletypeOfCelebrationChange}  label='Type of celebration' />
						<Form.Input  onChange={this.props.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
					</Form.Group>
					<center><Button id={this.props.id}  onClick={this.props.editEvent} type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
					</Form>
					</Modal.Content>
					</Modal>
			</td>
		</tr>
	);
};
}

export default Event;
