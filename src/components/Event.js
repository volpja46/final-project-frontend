import React from 'react';
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import GiftModal from './GiftModal'
import { editTheEvent } from '../actions/events'
import { connect } from 'react-redux'
import AddPresentModal from './AddPresentModal'
import '../App.css';
import PresentContainer from './PresentContainer'
import moment from 'moment'


class Event extends React.Component {
	constructor (props){
    super(props)
    this.state = {
			user_id: this.props.user_id,
			name: this.props.eventData.name,
			date: this.props.eventData.date,
      type_of_celebration: this.props.eventData.type_of_celebration,
			budget: this.props.eventData.budget,
			showPresents: false,
			modalOpen: false
    }
  }

	handleOpen = () => this.setState({ modalOpen: true })

	handleBudgetChange = (event) => {
		this.setState({
			budget: event.target.value
		})
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

	onClick = (e) => {
		e.preventDefault();
		this.setState({showPresents: !this.state.showPresents})
	}

	handleClose = () => this.setState({ modalOpen: false })

	handleEdit = (event) => {
		this.handleClose(event)
    let eventId = parseInt(event.target.id)
    let editedEvent = this.props.events.find((event)=>{
        return event.id === eventId
     })
     let finalEditedEvent = {
       id: editedEvent.id,
       name: this.state.name,
       date:this.state.date,
       type_of_celebration: this.state.type_of_celebration,
       user_id: this.props.user_id,
			 budget: this.state.budget
       }
     this.props.editTheEvent(finalEditedEvent)
   }


	render(){
		var oneDay = 24*60*60*1000;
		var firstDate = new Date();
		var secondDate = this.props.eventData.date
		var finalSecDate = new Date(secondDate)
		var diffDays = Math.round(Math.abs((firstDate.getTime() - finalSecDate.getTime())/(oneDay)));

	return (
			<div className="Events">
				<h1><b>{diffDays} </b>shopping days until this event</h1>
				<p><b>Date:</b> {this.props.eventData.date}</p>
				<p><b>For who:</b> {this.props.eventData.name}</p>
				<p><b>Type of celebration:</b> {this.props.eventData.type_of_celebration}</p>
				<p><b>Budget:</b> ${this.props.eventData.budget}</p>
					<Button color="teal" size="medium" style={{color:'white', width:'7.6em', marginBottom:'.20em'}} id={this.props.id}  onClick={this.props.handleRemove}>delete event</Button>
					<Modal  style={{display: 'block'}} size="small" trigger={<Button onClick={this.handleOpen}
					 size="medium" color="teal" style={{color:'white', width:'7.6em'}} id={this.props.id}
					 >edit event details</Button>}
					 open={this.state.modalOpen}
					 onClose={this.handleClose}
					 basic
					closeIcon>
					<Header icon='event' align="center" size="huge" color="teal" content='Update this event' />
					<Modal.Content>
					<Grid
					style={{ height: '100%', marginTop: '1em', color:'white'}}
					verticalAlign='middle'
					textAlign='center'>
					<Segment padded  centered >
					<Form onSubmit={this.props.handleSubmit}>
					<Form.Group stacked={2}>
						<Form.Input value={this.state.name} onChange ={this.handleNameChange}  color="teal" label='For who?'  />
						<Form.Input value={this.state.budget} onChange ={this.handleBudgetChange}  color="teal" label='Budget'  />
					</Form.Group>
					<Form.Group stackable={2}>
						<Form.Input value={this.state.type_of_celebration} onChange={this.handletypeOfCelebrationChange}  label='Type of Celebration' />
						<Form.Input value={this.state.data} onChange={this.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
					</Form.Group>
				<Button id={this.props.id} onClick={this.handleEdit} type="submit" color="teal" className="ui fluid button">Submit</Button>
					</Form>
					</Segment>
					</Grid>
					</Modal.Content>
					</Modal>
				<AddPresentModal eventId={this.props.id}/>
					<PresentContainer eventId={this.props.id}/>
				</div>
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
