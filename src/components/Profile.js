import React from 'react'
import { connect } from 'react-redux'
import GiftContainer from './GiftContainer'
import Navbar from './Navbar'
import AddEventForm from './AddEventForm'

const Profile = (props) => {
  return (
    <div style={{marginTop: '7em', color:'teal'}}>
      <Navbar/>
    <h1><center>Welcome, {props.username}</center></h1>
    <GiftContainer user_id={props.user_id}/>
    <AddEventForm user_id={props.user_id}/>
  </div>
  )
}
const mapStateToProps = (state) => ({ username: state.users.username, user_id:state.users.user_id})

export default connect(mapStateToProps)(Profile)
