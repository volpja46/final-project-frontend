import React from 'react'
import '../App.css'
import AddPresentModal from './AddPresentModal'
import { connect } from 'react-redux'
import { addPresent } from '../actions/presents'
import Present from './Present'
import {Button, Container, Grid, Modal} from 'semantic-ui-react'

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

  handleSubmit = (event) => {
    event.preventDefault()
    let newPresent = {
    name: this.state.name,
    event_id: this.state.event_id,
    store: this.state.store,
    price: this.state.price,
    priority: this.state.priority
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
    const filteredPresents = this.props.presents.filter((present) => {
     return present.event_id === this.props.eventId
   })

     const presentsTable =
      filteredPresents.map((present, index)=> <Present key={index} id={present.id} eventId={this.props.eventId} presentData= {present}/>)
  return (
    <div>
        {presentsTable}
  </div>
    )
  }
}

const mapStateToProps = (state) => {  return {
  presents: state.presents.presents
  };
};

const mapDispatchToProps = {
  addPresent: addPresent
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentContainer);
