import React from 'react'
import { connect } from 'react-redux'
import {Button, Header, Segment, Form, Grid, Icon, Modal} from 'semantic-ui-react'

class AddEventModal extends React.Component {

  constructor (props){
    super(props)
    this.state = {
			user_id: this.props.user_id,
			name: this.props.name,
			date: this.props.date,
      type_of_celebration: this.props.type_of_celebration,
			budget: this.props.budget,
			showPresents: false,
			modalOpen: false
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = (event) => {
    this.setState({
    modalOpen: false
   })
   this.props.handleSubmit(event)
  }

  render(){
  return (

<Modal size="large" trigger={<Button onClick={this.handleOpen} size='big' style={{marginTop:'3em', marginBottom:"3em"}}  color="teal">Add a new event</Button>}
open={this.state.modalOpen}
onClose={this.handleClose}
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
<Form style={{color:'black'}}>
<Form.Group >
<Form.Input  onChange={this.props.handletypeOfCelebrationChange} label='Type of celebration' placeholder='Type of celebration' />
</Form.Group>
<Form.Group>
<Form.Input onChange ={this.props.handleNameChange}color="teal" label='For who' placeholder='For Who' />
</Form.Group>
<Form.Group >
<Form.Input  onChange={this.props.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
</Form.Group>
<Form.Group >
<Form.Input onChange={this.props.handleBudgetChange} label='Budget' placeholder='Budget' />
</Form.Group>
<center><Button onClick={this.handleClose} type="submit" color="teal" className="ui black fluid button" >Submit</Button> </center>
</Form>
</Segment>
</Grid>
</Modal.Content>
</Modal>
)
}
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    user_id: state.users.user_id
  };
};

export default connect(mapStateToProps)(AddEventModal);
