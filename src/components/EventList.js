import React from 'react';
import Event from './Event';
import { Table, Container, Grid, Header } from 'semantic-ui-react'
import '../App.css'
import { connect } from 'react-redux'

const EventList = (props) => {

  const filteredEvents = props.events.filter((event) => {
   return event.user_id === props.user_id
 })

  const eventTable = filteredEvents.map((event, index)=> <Event key={index} id={event.id} eventData= {event} handleRemove={props.handleRemove}/>)


return (
  eventTable.length > 0 ?
  <div>
    <h1>All your upcoming events:</h1>
    {eventTable}
</div>
  : <Grid style={{ height: '100%', marginTop: '1em', color:'black'}}
  verticalAlign='middle'
  textAlign='center'><h1>You haven't logged any events yet</h1>
</Grid>
)
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    user_id: state.users.user_id
  };
};

export default connect(mapStateToProps)(EventList);
