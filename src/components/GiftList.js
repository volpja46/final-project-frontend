import React from 'react';
import Gift from './Gift';
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'


const GiftList = (props) => {
  const filteredGifts = props.gifts.filter((gift) => {
   return gift.user_id === props.user_id
 })

   const giftTable = filteredGifts.map((gift, index)=> <Gift key={index} id={gift.id} giftData= {gift} removeGift={props.removeGift}/>)

return (
  props.gifts.length > 0 ?
  <div>
    <h1>All gifts you have logged:</h1>
  <Container>
	<table className="ui padded inverted teal table">
		<tbody>
			<tr>
        <Table.HeaderCell className="aligned header" width={2}>Date</Table.HeaderCell>
        <Table.HeaderCell className="aligned header" color ="teal" width={2}>Name</Table.HeaderCell>
				<Table.HeaderCell className="aligned header" width={2}>Occasion</Table.HeaderCell>
        <Table.HeaderCell className="aligned header" width={2}>From</Table.HeaderCell>
	      <Table.HeaderCell className="aligned header" width={3}>Description</Table.HeaderCell>
        <Table.HeaderCell width={1}></Table.HeaderCell>
			</tr>
      {giftTable}
		</tbody>
	</table>
</Container>
</div>
  : <h1>You haven't logged any gifts yet</h1>
)
}
// can use these props in THIS component!
const mapStateToProps = (state) => {
  return {
    gifts: state.gifts.gifts,
    user_id: state.users.user_id
  };
};

export default connect(mapStateToProps)(GiftList);
