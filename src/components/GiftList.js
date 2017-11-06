import React from 'react';
import Gift from './Gift';
import { Table, Container } from 'semantic-ui-react'
import '../App.css'


const GiftList = (props) => {

  const giftTable = props.gifts.map((gift, index)=> <Gift key= {gift.id} giftData= {gift}/>)

return (
  props.gifts.length > 0 ?
  <div>
  <Container>
	<table className="ui padded inverted teal table">
		<tbody>
			<tr>
        <Table.HeaderCell className="aligned header" width={2}>Date</Table.HeaderCell>
        <Table.HeaderCell className="aligned header" color ="teal" width={3}>Name</Table.HeaderCell>
				<Table.HeaderCell className="aligned header" width={2}>Occasion</Table.HeaderCell>
       <Table.HeaderCell className="aligned header" width={2}>From</Table.HeaderCell>
	      <Table.HeaderCell className="aligned header" width={4}>Description</Table.HeaderCell>
			</tr>
			{giftTable}
		</tbody>
	</table>
</Container>
</div>
  : null
)
}
export default GiftList;
