import React from 'react';
import {Grid} from 'semantic-ui-react'


const Search = props => {
	return (
		<div className="ui aligned icon input">
			<Grid
        textAlign='center'
        style={{ height: '100%', marginLeft:'25em', marginRight:'23em', marginTop:'1em', marginBottom:'0.5em'}}
        verticalAlign='middle'
      >
			<input
				type="text"
				placeholder={'Search your gifts'}
				value={props.searchTerm}
				onChange={props.handleChange}
			/>
			<i style={{color:'teal', marginTop:'0.25em'}}className="circular search link icon" />
		</Grid>
		</div>
	);
};
export default Search;
