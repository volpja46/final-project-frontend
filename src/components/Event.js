import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';


const Event = props => {
	return (
			<tr>
				<td>{props.eventData.type}</td>
				<td>{props.eventData.date}</td>
				<td>{props.eventData.name}</td>
		</tr>
	);
};

export default Event;
