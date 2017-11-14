import React from 'react';
import { Grid, Form } from 'semantic-ui-react';

const Search = props => {
	return (
		<div className="ui aligned icon input">
			<Grid
				textAlign="center"
				style={{
					height: '80%',
					marginLeft: '28em',
					marginRight: '30em',
					marginTop: '1em',
					marginBottom: '0.9em'
				}}
				verticalAlign="middle"
			>
				<Form.Input
					style={{ size: 'small', marginRight: '40em', marginLeft: '40em' }}
					action={{
						size: 'small',
						color: 'teal',
						labelPosition: 'left',
						icon: 'search',
						content: 'Search'
					}}
					type="text"
					value={props.searchTerm}
					onChange={props.handleSearchChange}
				/>
			</Grid>
		</div>
	);
};
export default Search;
