import React from 'react'
import {Button, Header, Segment, Form, Grid, Icon, Modal} from 'semantic-ui-react'


const AddEventModal = props => {
  return (

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
<Form style={{color:'black'}} onSubmit={props.handleSubmit} >
<Form.Group >
<Form.Input  onChange={props.handletypeOfCelebrationChange} label='Type of celebration' placeholder='Type of celebration' />
</Form.Group>
<Form.Group>
<Form.Input onChange ={props.handleNameChange}color="teal" label='For who' placeholder='For Who' />
</Form.Group>
<Form.Group >
<Form.Input  onChange={props.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
</Form.Group>
<center><Button type="submit" color="teal" className="ui black fluid button" >Submit</Button> </center>
</Form>
</Segment>
</Grid>
</Modal.Content>
</Modal>
)
}

export default AddEventModal
