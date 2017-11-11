import React from 'react'
import {Grid} from 'semantic-ui-react'
import '../App.css'
import AddPresentModal from './AddPresentModal'
import { getPresents } from '../actions/presents'
import { addPresent } from '../actions/presents'
import { connect } from 'react-redux'
// import { removeTheGift } from '../actions/gifts'


class PresentContainer extends React.Component {
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

  componentDidMount = () => {
    this.props.getPresents()
    }

  handleSubmit = (event) => {
    event.preventDefault()
    let newPresent = {
    name: this.state.name,
    event_id: this.state.event_id,
    store: this.state.store,
    price: this.state.price,
    price: this.state.priority
  }
  this.props.addPresent(newPresent)
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

  render() {

     return(
       <div>
          <Grid
            style={{ height: '100%', marginTop: '1em', marginLeft:'0.43em'}}
                verticalAlign='middle'
                textAlign='center'>
        <GiftList gifts={giftsForCurrentUser} removeGift={this.handleRemove} />
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
    presents: state.presents.presents,
    user_id: state.users.user_id
  };
};

const mapDispatchToProps = {
  getPresents: getPresents,
  addPresent: addPresent
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentContainer);
