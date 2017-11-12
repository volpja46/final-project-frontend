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
      price: '',
      modalOpen: false
    }
  }

  componentDidMount = () => {
    this.props.getPresents()
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

  handleClose = (event) => {
    this.setState({
    modalOpen: false
   })
   this.handleSubmit(event)
  }

    handleSubmit = (event) => {
      event.preventDefault()
      let newPresent = {
      name: this.state.name,
      event_id: this.state.event_id,
      store: this.state.store,
      price: this.state.price,
      priority: this.state.priority
    }
    this.props.addPresent(newPresent)
  }


  handleOpen = () => {
    this.setState ({
      modalOpen: true
    })
  }

  render (){
  return (
    <div>
    <Modal  style={{display: 'block'}} size="small" trigger={<Button onClick={this.handleOpen} size="medium" style={{color:'black', width:'7.6em'}} id={this.props.id} >add a gift for this event</Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    basic
    >
    <Header icon='gift' align="center" size="huge" color="teal" content='add a present' />
    <Modal.Content>
    <Grid
    style={{ height: '100%', marginTop: '1em', color:'black'}}
    verticalAlign='middle'
    textAlign='center'>
    <Segment padded  centered >
    <Form>
    <Form.Group stacked={2}>
      <Form.Input onChange ={this.handleNameChange} value={this.state.name}  color="teal" label='Gift'  />
      <Form.Input onChange={this.handleStoreChange} value={this.state.store} label='store'  /><br/>
    </Form.Group>
    <Form.Group stackable={2}>
      <Form.Input   onChange={this.handlePriceChange} value={this.state.price} label='Price' />
      <Form.Input  onChange={this.handlePriorityChange} value={this.state.priority} label='Priority' placeholder='Rriority' />
    </Form.Group>
    <center><Button id={this.props.id}  onClick={this.handleClose} type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
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
    presents: state.presents.presents,
    username: state.users.username,
    user_id: state.users.user_id
  };
};

const mapDispatchToProps = {
  addPresent: addPresent,
  getPresents: getPresents,

};

export default connect(mapStateToProps, mapDispatchToProps)(AddPresentModal)
