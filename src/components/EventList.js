import React from 'react';
import Event from './Event';
import { Table, Container } from 'semantic-ui-react'
import '../App.css'


const EventList = (props) => {

  const eventTable = props.events.map((event, index)=> <Event key= {event.id} eventData= {event} handleRemove={props.handleRemove}/>)

return (
  props.events.length > 0 ?
  <div>
  <Container>
	<table className="ui padded inverted teal table">
		<tbody>
			<tr>
          <Table.HeaderCell className="aligned header" width={6}>Date</Table.HeaderCell>
        <Table.HeaderCell className="aligned header" color ="teal" width={6}>Name</Table.HeaderCell>
          <Table.HeaderCell className="aligned header" width={6}>Celebration Type</Table.HeaderCell>
			</tr>
			{eventTable}
		</tbody>
	</table>
</Container>
</div>
  : null
)
}
export default EventList;
