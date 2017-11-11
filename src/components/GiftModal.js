import React from 'react'
import {Button, Header, Segment, Form, Grid, Icon, Modal} from 'semantic-ui-react'


class GiftModal extends React.Component {


  constructor(props){
    super(props)
    this.state = {
    modalOpen: false,
    user_id: this.props.user_id,
    name: '',
    for_who: '',
    description: '',
    occasion: '',
    photo: '',
    date: ''
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
  <Modal size="small" trigger={<Button onClick={this.handleOpen} size='big' style={{marginTop:'3em', marginBottom:"3em"}}  color="teal">Add a new gift to your collection <Icon name='gift'/></Button>}
  open={this.state.modalOpen}
  onClose={this.handleClose}
  basic
  closeIcon>
    <Header icon='gift' align="center" size="huge" color="teal" content='Log a new gift' />
<Modal.Content>
  <Grid
      style={{ height: '100%', marginTop: '1em', color:'black'}}
      verticalAlign='middle'
      textAlign='center'>
    <Segment padded color='black' centered >
          <Header as='h2' color='teal' content= "Add a gift to your collection" className="fluid" icon='gift'>
          </Header>
<Form style={{color:'black'}} >
<Form.Group stacked={2}>
<Form.Input onChange ={this.props.handleNameChange}color="teal" label='Gift' placeholder='Gift' />
<Form.Input  onChange={this.props.handleFromWhoChange} label='Received from' placeholder='Received from' /><br/>
</Form.Group>
  <Form.Group stackable={2}>
      <Form.Input   onChange={this.props.handleOccasionChange} label='Occasion' placeholder='Occasion' />
      <Form.Input  onChange={this.props.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
  </Form.Group>
  <Form.Group widths='equal'>
        <Form.TextArea onChange={this.props.handleDescriptionChange} type="text area" label='Description' placeholder='Description' />
  </Form.Group>
    <center><Button onClick={this.handleClose} type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
        </Form>
      </Segment>
    </Grid>
  </Modal.Content>
</Modal>
      )
    }
  }


export default GiftModal
