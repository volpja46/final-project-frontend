import React from 'react'
import {Button, Header, Segment, Form, Grid, Icon, Modal} from 'semantic-ui-react'
import { addPresent } from '../actions/presents'
import { getPresents } from '../actions/presents'
import { connect } from 'react-redux'

class AddPresentModal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      event_id: this.props.eventId,
      store: '',
      priority: '',
      price: ''
    }
  }

  componentDidMount = () => {
    this.props.getPresents()
    }

  handleSubmit = (event) => {
    event.preventDefault()
    let newPresent = {
    name: this.state.name,
    event_id: this.state.event_id,
    store: this.state.store,
    price: this.state.price,
    price: this.state.priority
  }
  this.props.addPresent(newPresent)
}

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    })
   }

  handleStoreChange = (event) => {
    this.setState({
      store: event.target.value
    })
  }

  handlePriorityChange = (event) => {
    this.setState({
      priority: event.target.value
    })
  }

  render (){
  return (
    <Grid
    style={{ height: '100%', marginTop: '1em', color:'black'}}
    verticalAlign='middle'
    textAlign='center'>
    <Segment padded  centered >
    <Form  onSubmit={this.handleSubmit}>
    <Form.Group stacked={2}>
      <Form.Input onChange ={this.handleNameChange} value={this.state.name}  color="teal" label='Present' placeholder='Present' />
      <Form.Input onChange={this.handlePriceChange} value={this.state.price} label='Price' placeholder="price"  /><br/>
    </Form.Group>
    <Form.Group stackable={2}>
      <Form.Input   onChange={this.handleStoreChange} value={this.state.store} label='Store?' placeholder='Store' />
      <Form.Input  onChange={this.handlePriorityChange} value={this.state.priority} label='priority' placeholder='priority' />
      <Button>xxxx</Button>
    </Form.Group>
    </Form>
    </Segment>
    </Grid>
  )
 }
}
const mapStateToProps = (state) => {
  return {
    presents: state.presents.presents,
    username: state.users.username,
    user_id: state.users.user_id
  };
};

const mapDispatchToProps = {
  addPresent: addPresent,
  getPresents: getPresents
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPresentModal)
