export default function usersReducer(state = { username: null, user_id: null }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, username: action.payload.username, user_id: action.payload.user_id}
    default:
      return state
  }
}
