export function getPresents() {
	return dispatch => {
		fetch('http://localhost:3000/api/v1/presents')
			.then(response => response.json())
			.then(presentData => dispatch(setPresents(presentData)));
	};
}
export function setPresents(presentData) {
	return {
		type: 'SET_CURRENT_PRESENTS',
		payload: presentData
	};
}

export function addPresent(newPresent) {
	return dispatch => {
		fetch('http://localhost:3000/api/v1/presents', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer: ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify(newPresent)
		})
			.then(res => res.json())
			.then(presentsData => dispatch(addPresents(presentsData)));
	};
}

export function addPresents(presentsData) {
	return {
		type: 'ADD_PRESENT',
		payload: presentsData
	};
}

export function removeThePresent(presentId) {
	return dispatch => {
		fetch(`http://localhost:3000/api/v1/presents/${presentId}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: presentId
			})
		})
			.then(res => res.json())
			.then(deletedPresentId => dispatch(removePresent(deletedPresentId)));
	};
}

export function removePresent(deletedPresentId) {
	return {
		type: 'REMOVE_PRESENT',
		payload: deletedPresentId.deleted_present_id
	};
}

export function editThePresent(finalEditedPresent) {
	return dispatch => {
		fetch(`http://localhost:3000/api/v1/presents/${finalEditedPresent.id}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(finalEditedPresent)
		})
			.then(res => res.json())
			.then(editedPresent => dispatch(editPresent(editedPresent)));
	};
}

export function editPresent(editedPresent) {
	return {
		type: 'EDIT_PRESENT',
		payload: editedPresent
	};
}
