import React from 'react'
import GiftList from './GiftList'
import Search from './Search';
import {Grid} from 'semantic-ui-react'
import '../App.css'
import GiftModal from './GiftModal'
import { getGifts } from '../actions/gifts'
import { addGift } from '../actions/gifts'
import { connect } from 'react-redux'
import { removeTheGift } from '../actions/gifts'
import { editTheGift } from '../actions/gifts'

class GiftContainer extends React.Component {
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
    this.props.getGifts()
    }

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
  this.props.addGift(newGift)
}

   handleRemove = (event) => {
     let giftId = parseInt(event.target.id)
     this.props.removeTheGift(giftId)
  }


  handleEdit = (event) => {
    debugger
    let giftId = parseInt(event.target.id)
    let editedGift = this.props.gifts.find((gift)=>{
        return gift.id === giftId
     })

     let finalEditedGift = {
       id: editedGift.id,
       name: this.state.name,
       occasion:this.state.occasion,
       date:this.state.date,
       for_who:this.state.for_who,
       description:this.state.description,
       photo: this.state.photo,
       user_id: this.state.user_id
       }

     this.props.editTheGift(finalEditedGift)
   }

  render() {
    console.log('rerender')
    // const giftsForCurrentUser = this.props.gifts.filter(gift => {
    // 			return gift.user_id === this.props.user_id && gift.description.toLowerCase().includes(this.state.searchTerm)  || gift.for_who.toLowerCase().includes(this.state.searchTerm)
    //       || gift.occasion.toLowerCase().includes(this.state.searchTerm)
    //       || gift.name.toLowerCase().includes(this.state.searchTerm)
    // 		});

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
        <GiftList gifts={this.props.gifts} removeGift={this.handleRemove} editGift={this.handleEdit}/>
        </Grid>
        <GiftModal handleNameChange={this.handleNameChange}
            handleDescriptionChange={this.handleDescriptionChange}
          handleDateChange={this.handleDateChange}
          handleFromWhoChange={this.handleFromWhoChange}
          handleOccasionChange={this.handleOccasionChange}
          handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    gifts: state.gifts.gifts
  };
};

const mapDispatchToProps = {
  getGifts: getGifts,
  addGift: addGift,
  removeTheGift: removeTheGift,
  editTheGift: editTheGift
};

export default connect(mapStateToProps, mapDispatchToProps)(GiftContainer);
