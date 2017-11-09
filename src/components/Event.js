import React from 'react';
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import GiftModal from './GiftModal'
import { editTheEvent } from '../actions/events'
import { connect } from 'react-redux'
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';


class Event extends React.Component {

	constructor (props){
    super(props)
    this.state = {
			user_id: this.props.user_id,
			name: this.props.eventData.name,
			date: this.props.eventData.date,
      type_of_celebration: this.props.eventData.type_of_celebration
    }
  }

	handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handletypeOfCelebrationChange = (event) => {
    this.setState ({
      type_of_celebration: event.target.value
    })
  }

	handleEdit = (event) => {
    let eventId = parseInt(event.target.id)
    let editedEvent = this.props.events.find((event)=>{
        return event.id === eventId
     })
     let finalEditedEvent = {
       id: editedEvent.id,
       name: this.state.name,
       date:this.state.date,
       type_of_celebration: this.state.type_of_celebration,
       user_id: this.props.user_id
       }
     this.props.editTheEvent(finalEditedEvent)
   }

	render(){
	return (
			<tr>
				<td>{this.props.eventData.date}</td>
				<td>{this.props.eventData.name}</td>
				<td>{this.props.eventData.type_of_celebration}</td>
				<td>
					<Button size="medium" style={{color:'black', width:'7.6em', marginBottom:'.20em'}} id={this.props.id}  onClick={this.props.handleRemove}>delete event</Button>
					<Modal  style={{display: 'block'}} size="small" trigger={<Button size="medium" style={{color:'black', width:'7.6em'}} id={this.props.id}>edit event</Button>}
					closeIcon basic>
					<Header icon='event' align="center" size="huge" color="teal" content='Update this event' />
					<Modal.Content>
					<Grid
					style={{ height: '100%', marginTop: '1em', color:'black'}}
					verticalAlign='middle'
					textAlign='center'>
					<Segment padded  centered >
					<Form onSubmit={this.props.handleSubmit}>
					<Form.Group stacked={2}>
						<Form.Input value={this.state.name} onChange ={this.handleNameChange}  color="teal" label='For who?'  />
					</Form.Group>
					<Form.Group stackable={2}>
						<Form.Input value={this.state.type_of_celebration} onChange={this.handletypeOfCelebrationChange}  label='Type of Celebration' />
						<Form.Input value={this.state.data} onChange={this.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
					</Form.Group>
					<center><Button id={this.props.id}  onClick={this.handleEdit} type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
					</Form>
					</Segment>
					</Grid>
					</Modal.Content>
					</Modal>
			</td>
		</tr>
	);
};
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
		user_id: state.users.user_id
  };
};

const mapDispatchToProps = {
  editTheEvent: editTheEvent
};


export default connect(mapStateToProps, mapDispatchToProps)(Event);
