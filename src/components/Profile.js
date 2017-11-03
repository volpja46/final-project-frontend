import React from 'react'
import { connect } from 'react-redux'
import AddGiftForm from './AddGiftForm'
import GiftContainer from './GiftContainer'


const Profile = (props) => {
  console.log(props)
  return (
    <div>
    <h1>Welcome, {props.username}</h1>
    <AddGiftForm user_id={props.user_id}/>
  </div>
  )
}
const mapStateToProps = (state) => ({ username: state.usersReducer.username, user_id:state.usersReducer.user_id   })

export default connect(mapStateToProps)(Profile)
