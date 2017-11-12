import React from 'react';
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import GiftModal from './GiftModal'
import { editThePresent } from '../actions/presents'
import { connect } from 'react-redux'
import AddPresentModal from './AddPresentModal'
import '../App.css';
import { removeThePresent } from '../actions/presents'

class Present extends React.Component {

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

  handleRemove = (event) => {
    let presentId = parseInt(event.target.id)
    this.props.removeThePresent(presentId)
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

	handleClose = () => this.setState({ modalOpen: false })

	handleEdit = (event) => {
    event.preventDefault()
		this.handleClose(event)
    let presentId = parseInt(event.target.id)
    let editedPresent = this.props.presents.find((present)=>{
        return present.id === presentId
     })

     let finalEditedPresent = {
       id: editedPresent.id,
       name: this.state.name,
       event_id: this.props.eventId,
       store: this.state.store,
       price: this.state.price,
       priority: this.state.priority
     }
   this.props.editThePresent(finalEditedPresent)
     }

	render(){
	return (
			<div className="Events">
				<p>Name: {this.props.presentData.name}</p>
				<p>Store: {this.props.presentData.store}</p>
				<p>Price: {this.props.presentData.price}</p>
				<p>Priority: {this.props.presentData.priority}</p>
					<Button size="medium" style={{color:'black', width:'7.6em', marginBottom:'.20em'}} id={this.props.id}  onClick={this.handleRemove}>delete present</Button>
          <Modal  style={{display: 'block'}} size="small" trigger={<Button onClick={this.handleOpen} size="medium" style={{color:'black', width:'7.6em'}} id={this.props.id} >update gift</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          >
          <Header icon='gift' align="center" size="huge" color="teal" content='Update your gift' />
          <Modal.Content>
          <Grid
          style={{ height: '100%', marginTop: '1em', color:'black'}}
          verticalAlign='middle'
          textAlign='center'>
          <Segment padded  centered >
          <Form>
          <Form.Group stacked={2}>
            <Form.Input onChange ={this.handleNameChange} value={this.state.name}  color="teal" label='Gift'/>
            <Form.Input onChange={this.handleStoreChange} value={this.state.store} label='Store'  /><br/>
          </Form.Group>
          <Form.Group stackable={2}>
            <Form.Input  onChange={this.handlePriceChange} value={this.state.price} label='Price' placeholder='price' />
          <Form.Input   onChange={this.handlePriorityChange} value={this.state.priority} label='priority'  />
          </Form.Group>
          <center><Button id={this.props.id} onClick={this.handleEdit} type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
          </Form>
          </Segment>
          </Grid>
          </Modal.Content>
          </Modal>
					</div>
	);
};
}

const mapStateToProps = (state) => {
  return {
    presents: state.presents.presents
  };
};

const mapDispatchToProps = {
  removeThePresent: removeThePresent,
  editThePresent: editThePresent
};


export default connect(mapStateToProps, mapDispatchToProps)(Present);
