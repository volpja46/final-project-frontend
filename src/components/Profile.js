import React from 'react'
import { connect } from 'react-redux'
import AddGiftForm from './AddGiftForm'
import Navbar from './Navbar'
import EventContainer from './EventContainer'
import AddEventForm from './AddEventForm'

const Profile = (props) => {
  return (
    <div style={{marginTop: '7em', color:'teal'}}>
      <Navbar/>
    <h1 ><center>Welcome, {props.username}</center></h1>
    <AddGiftForm user_id={props.user_id}/>
    <AddEventForm user_id={props.user_id}/>
  </div>
  )
}

const mapStateToProps = (state) => ({ username: state.usersReducer.username, user_id:state.usersReducer.user_id})

export default connect(mapStateToProps)(Profile)
