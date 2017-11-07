import React from 'react'
import EventContainer from './EventContainer'
import {Button, Header, Segment, Form, Grid, Icon, Modal} from 'semantic-ui-react'
import '../App.css'
import { connect } from 'react-redux'
import Navbar from './Navbar'


class AddEventForm extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      events: [],
      user_id: props.user_id,
      name: '',
      date: '',
      type: ''
    }
  }

  componentDidMount = () => {
    this.fetchEvents()
    }

    fetchEvents = () => {
      fetch('http://localhost:3000/api/v1/events')
  			.then(res => res.json())
        .then(res =>
          this.setState({
          events: res
          }));
  	};


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
      type: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newEvent = {
    name: this.state.name,
    date: this.state.date,
    user_id: this.props.user_id,
  }

  let eventCreateParams = {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'},
    body: JSON.stringify(newEvent)
  }

  fetch('http://localhost:3000/api/v1/events', eventCreateParams)
    .then(resp=>resp.json())
    .then(resp =>
      this.setState((prevState, curProps) => {
        return {events: [...prevState.events, resp]}
      }))
}

  render() {
    const eventsForCurrentUser = this.state.events.filter(event => {
    			return event.user_id === this.props.user_id
    		});

     return(
       <div>
       <div>
         <Navbar/>
          <Grid
            style={{ height: '100%', marginTop: '10em', marginLeft:'0.44em'}}
            verticalAlign='middle'
            textAlign='center'>
    <EventContainer events={eventsForCurrentUser}/>
        </Grid>
            </div>
          <Modal size="large" trigger={<Button size='big' style={{marginTop:'3em', marginBottom:"3em"}}  color="teal">Add a new event</Button>}
          basic closeIcon style>
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
const mapStateToProps = (state) => ({ username: state.usersReducer.username, user_id:state.usersReducer.user_id})

export default connect(mapStateToProps)(AddEventForm)
