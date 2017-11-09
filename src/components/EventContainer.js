import React from 'react'
import EventList from './EventList'
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import '../App.css'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getEvents } from '../actions/events'
import { addEvent } from '../actions/events'
import { removeTheEvent } from '../actions/events'
import AddEventModal from './AddEventModal'
// import { editTheEvent } from '../actions/events'


class EventContainer extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      events: [],
      user_id: props.user_id,
      name: '',
      date: '',
      type_of_celebration: ''
    }
  }

  componentDidMount = () => {
    this.props.getEvents()
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

  handleSubmit = (event) => {
    event.preventDefault()
    let newEvent = {
    name: this.state.name,
    date: this.state.date,
    user_id: this.props.user_id,
    type_of_celebration: this.state.type_of_celebration
  }
    this.props.addEvent(newEvent)
  }

  handleRemove = (event) => {
    let eventId = parseInt(event.target.id)
    this.props.removeTheEvent(eventId)
 }


  render() {
    const eventsForCurrentUser = this.props.events.filter(event => {
      return this.props.user_id === event.user_id
    		});
     return(
       <div>
         <Navbar/>
          <Grid
            style={{ height: '100%', marginTop: '10em', marginLeft:'0.44em'}}
            verticalAlign='middle'
            textAlign='center'>
          <EventList handleRemove={this.handleRemove} events={eventsForCurrentUser}/>
        </Grid>
        <AddEventModal handleSubmit={this.handleSubmit} handleNameChange={this.handleNameChange} handletypeOfCelebrationChange={this.handletypeOfCelebrationChange}
          handleDateChange={this.handleDateChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    username: state.users.username,
    user_id: state.users.user_id
  };
};

const mapDispatchToProps = {
  getEvents: getEvents,
  addEvent: addEvent,
  removeTheEvent: removeTheEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)
