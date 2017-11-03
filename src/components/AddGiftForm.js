import React from 'react'
import GiftContainer from './GiftContainer'


class addGiftForm extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      gifts: [],
      user_id: props.user_id,
      name: '',
      description: '',
      photo: '',
      for_who: '',
      occasion: ""
    }
  }

  componentWillMount = () => {
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

  handlePhotoChange = (event) => {
    this.setState({
      photo: event.target.value
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
    console.log(this.props)
    event.preventDefault()
    let newGift = {
    name: this.state.name,
    description: this.state.description,
    photo: this.state.photo,
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
      })).then(this.giftsForCurrentUser())
}

  giftsForCurrentUser = () => {
    console.log(this.props)
  }

  render() {
    const giftsForCurrentUser = this.state.gifts.filter(gift => {
    			return gift.user_id === this.props.user_id
    		});
     return(
      <div>
        <GiftContainer gifts={giftsForCurrentUser}/>
        <h3>Add a gift you received</h3>
      <form onSubmit={this.handleSubmit} className="ui form">
     <div className="equal fields">
      <div className="field">
        <label>Name</label>
        <input
          onChange ={this.handleNameChange}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <input
        onChange={this.handleDescriptionChange}/>
      </div>
      <div className="field">
        <label>Received from</label>
        <input
        onChange={this.handleFromWhoChange}/>
      </div>
      <div className="field">
        <label>Occasion</label>
        <input
        onChange={this.handleOccasionChange}/>
      </div>
      <div className="field">
        <label>Upload a picture</label>
        <input
          onChange={this.handlePhotoChange}
         />
      </div>
      <button type="submit" className="ui button" role="button">Submit</button>
      <div className="ui hidden divider">
      </div>
    </div>
  </form>
  </div>
    )
  }
}

export default addGiftForm;
