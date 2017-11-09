import React from 'react'
import {Button, Header, Segment, Form, Grid, Icon, Modal} from 'semantic-ui-react'


const GiftModal = props => {
  return (
    <Modal size="small" trigger={<Button size='big' style={{marginTop:'3em', marginBottom:"3em"}}  color="teal">Add a new gift to your collection <Icon name='gift'/></Button>}
    basic closeIcon>
<Header icon='gift' align="center" size="huge" color="teal" content='Log a new gift' />
<Modal.Content>
  <Grid
style={{ height: '100%', marginTop: '1em', color:'black'}}
verticalAlign='middle'
textAlign='center'>
<Segment padded color='black' centered >
<Header as='h2' color='teal' content= "Add a gift to your collection" className="fluid" icon='gift'>
</Header>
<Form style={{color:'black'}} onSubmit={props.handleSubmit} >
<Form.Group stacked={2}>
<Form.Input onChange ={props.handleNameChange}color="teal" label='Gift' placeholder='Gift' />
<Form.Input  onChange={props.handleFromWhoChange} label='Received from' placeholder='Received from' /><br/>
</Form.Group>
<Form.Group stackable={2}>
<Form.Input   onChange={props.handleOccasionChange} label='Occasion' placeholder='Occasion' />
<Form.Input  onChange={props.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
</Form.Group>
<Form.Group widths='equal'>
<Form.TextArea   onChange={props.handleDescriptionChange} type="text area" label='Description' placeholder='Description' />
</Form.Group>
<center><Button type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
</Form>
</Segment>
</Grid>
</Modal.Content>
</Modal>
  )
}

export default GiftModal
