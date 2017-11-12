export default function presentsReducer(state = {presents:[]} , action) {
  switch (action.type) {
    case "SET_CURRENT_PRESENTS":
      return Object.assign({}, state, {presents: action.payload})
    case "REMOVE_PRESENT":
      const presentId = action.payload;
      return Object.assign({}, state, {presents: state.presents.filter(present => present.id !== presentId)}
    )
    case "EDIT_PRESENT":
    let editedPresentId = action.payload.id
    let newPresents = state.presents.filter(present => present.id !== editedPresentId)
    return Object.assign({}, state, {presents: state.presents.filter(present => present.id !== editedPresentId).concat(action.payload)}
    )
     case "ADD_PRESENT":
      return Object.assign({}, state, {
        presents: state.presents.concat(action.payload)
      });
    default:
      return state
  }
}
