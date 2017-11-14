export default function presentsReducer(state = { presents: [] }, action) {
	switch (action.type) {
		case 'SET_CURRENT_PRESENTS':
			return Object.assign({}, state, { presents: action.payload });
		case 'REMOVE_PRESENT':
			const presentId = action.payload;
			return Object.assign({}, state, {
				presents: state.presents.filter(present => present.id !== presentId)
			});
		case 'EDIT_PRESENT':
			let editedPresentId = action.payload.id;
			return Object.assign({}, state, {
				presents: state.presents.map(present => {
					if (present.id === editedPresentId) {
						return action.payload;
					} else {
						return present;
					}
				})
			});
		case 'ADD_PRESENT':
			return Object.assign({}, state, {
				presents: state.presents.concat(action.payload)
			});
		default:
			return state;
	}
}
