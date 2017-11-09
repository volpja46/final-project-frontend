import React from 'react';
import {Button, Header, Segment, Form, Grid, Modal} from 'semantic-ui-react'
import GiftModal from './GiftModal'

class Gift extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
	return (
			<tr>
				<td>{this.props.giftData.date}</td>
				<td>{this.props.giftData.name}</td>
				<td>{this.props.giftData.occasion}</td>
				<td>{this.props.giftData.for_who}</td>
				<td>{this.props.giftData.description}</td>
				<td>
					<Button size="medium" style={{color:'black', width:'7.6em', marginBottom:'.20em'}} id={this.props.id}  onClick={this.props.removeGift}>delete gift</Button>
					<Modal  style={{display: 'block'}} size="small" trigger={<Button size="medium" style={{color:'black', width:'7.6em'}} id={this.props.id} >edit gift</Button>}
					closeIcon>
					<Header icon='gift' align="center" size="huge" color="teal" content='Update your gift' />
					<Modal.Content>
					<Grid
					style={{ height: '100%', marginTop: '1em', color:'black'}}
					verticalAlign='middle'
					textAlign='center'>
					<Segment padded  centered >
					<Form  onSubmit={this.props.handleSubmit}>
					<Form.Group stacked={2}>
						<Form.Input onChange ={this.props.handleNameChange}  color="teal" label='Gift'  />
						<Form.Input  onChange={this.props.handleFromWhoChange} label='Received from'  /><br/>
					</Form.Group>
					<Form.Group stackable={2}>
						<Form.Input   onChange={this.props.handleOccasionChange}  label='Occasion' />
						<Form.Input  onChange={this.props.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.TextArea   onChange={this.props.handleDescriptionChange} type="text area" label='Description'  />
					</Form.Group>
					<center><Button id={this.props.id}  onClick={this.props.editGift} type="submit" color="teal" className="ui black fluid button">Submit</Button> </center>
					</Form>
					</Segment>
					</Grid>
					</Modal.Content>
					</Modal>
			</td>
		</tr>
	);
};
}

export default Gift;
