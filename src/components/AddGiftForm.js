import React from 'react'
import GiftContainer from './GiftContainer'
import Search from './Search';
import {Button, Header, Segment, Image, Form, Grid, Icon, Modal} from 'semantic-ui-react'
import '../App.css'



class addGiftForm extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      gifts: [],
      user_id: props.user_id,
      name: '',
      date: '',
      description: '',
      photo: '',
      for_who: '',
      occasion: "",
      searchTerm: ""
    }
  }

  componentDidMount = () => {
    this.fetchGifts()
    }

    fetchGifts = () => {
      fetch('http://localhost:3000/api/v1/gifts')
  			.then(res => res.json())
  			.then(res =>
  				this.setState({
  					gifts: res
  				}));
  	};

    handleSearchChange = (event) => {
  		this.setState({
  			searchTerm: event.target.value.toLowerCase()
  		});
  	}

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handleFromWhoChange = (event) => {
    this.setState ({
      for_who: event.target.value
    })
  }

  handleOccasionChange = (event) => {
    this.setState ({
      occasion: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newGift = {
    name: this.state.name,
    description: this.state.description,
    date: this.state.date,
    user_id: this.props.user_id,
    for_who: this.state.for_who,
    occasion: this.state.occasion
  }

  let giftCreateParams = {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'},
    body: JSON.stringify(newGift)
  }

  fetch('http://localhost:3000/api/v1/gifts', giftCreateParams)
    .then(resp=>resp.json())
    .then(resp =>
      this.setState((prevState, curProps) => {
        return {gifts: [...prevState.gifts, resp]}
      }))
}

  render() {
    const giftsForCurrentUser = this.state.gifts.filter(gift => {
    			return gift.user_id === this.props.user_id && gift.description.toLowerCase().includes(this.state.searchTerm)  || gift.for_who.toLowerCase().includes(this.state.searchTerm)
          || gift.occasion.toLowerCase().includes(this.state.searchTerm)
          || gift.name.toLowerCase().includes(this.state.searchTerm)
    		});

     return(
       <div>
         <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleSearchChange}
        />
          <Grid
            style={{ height: '100%', marginTop: '1em', marginLeft:'0.43em'}}
            verticalAlign='middle'
            textAlign='center'>
    <GiftContainer gifts={giftsForCurrentUser}/>
  </Grid>

          <Modal size="small" trigger={<Button size='big' style={{marginTop:'3em', marginBottom:"3em"}}  color="teal">Add a new gift to your collection <Icon name='gift'/></Button>}
          basic closeIcon style>
    <Header icon='gift' align="center" size="huge" color="teal" content='Log a new gift' />
      <Modal.Content>
        <Grid
      style={{ height: '100%', marginTop: '1em', color:'black'}}
      verticalAlign='middle'
      textAlign='center'>
 <Segment padded color='black' centered >
<Header as='h2' color='teal' content= "Add a gift to your collection" className="fluid" icon='gift'>
</Header>
<Form style={{color:'black'}} onSubmit={this.handleSubmit} >
  <Form.Group stacked={2}>
    <Form.Input onChange ={this.handleNameChange}color="teal" label='Gift' placeholder='Gift' />
    <Form.Input  onChange={this.handleFromWhoChange} label='Received from' placeholder='Received from' /><br/>
  </Form.Group>
  <Form.Group unstackable={2}>
    <Form.Input   onChange={this.handleOccasionChange} label='Occasion' placeholder='Occasion' />
    <Form.Input  onChange={this.handleDateChange} label='Date' placeholder='ex: 2018-01-30' />
  </Form.Group>
  <Form.Group widths='equal'>
    <Form.TextArea   onChange={this.handleDescriptionChange} type="text area" label='Description' placeholder='Description' />
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

export default addGiftForm;
