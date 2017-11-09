import React from 'react'
import EventList from './EventList'
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import '../App.css'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getEvents } from '../actions/events'
import { addEvent } from '../actions/events'
import { removeTheEvent } from '../actions/events'
// import { editTheEvent } from '../actions/events'


class AddEventForm extends React.Component {
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

  handleTypeChange = (event) => {
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

  render() {
    const eventsForCurrentUser = this.props.events.filter(event => {
      return this.props.user_id === event.user_id
    		});

     return(
       <div>
       <div>
         <Navbar/>
          <Grid
            style={{ height: '100%', marginTop: '10em', marginLeft:'0.44em'}}
            verticalAlign='middle'
            textAlign='center'>
    <EventList events={eventsForCurrentUser}/>
        </Grid>
            </div>
          <Modal size="large" trigger={<Button size='big' style={{marginTop:'3em', marginBottom:"3em"}}  color="teal">Add a new event</Button>}
          basic closeIcon>
    <Header align="center" color="teal" size="huge" />
      <Modal.Content>
        <Grid
          style={{ height: '100%', marginTop: '1em', color:'black'}}
          verticalAlign='middle'
          textAlign='center'>
     <Segment padded color='black' centered >
    <Header style={{textAlign:'center', marginTop:'.05 em'}}as='h2' color='teal' content= "Add a new Event" className="fluid">
  </Header>
    <Form style={{color:'black'}} onSubmit={this.handleSubmit} >
      <Form.Group >
        <Form.Input  onChange={this.handleTypeChange} label='Type of celebration' placeholder='Type of celebration' />
      </Form.Group>
      <Form.Group>
        <Form.Input onChange ={this.handleNameChange}color="teal" label='For who' placeholder='For Who' />
      </Form.Group>
      <Form.Group >
        <Form.Input  onChange={this.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
      </Form.Group>
  <center><Button type="submit" color="teal" className="ui black fluid button" >Submit</Button> </center>
  </Form>
  </Segment>
  </Grid>
  </Modal.Content>
</Modal>
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
  addEvent: addEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventForm)
