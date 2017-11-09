export default function eventsReducer(state = { events:[] } , action) {
  switch (action.type) {
    case "SET_CURRENT_EVENTS":
      return Object.assign({}, state, {events: action.payload})
    case "REMOVE_EVENT":
      const eventID = action.payload;
      return Object.assign({}, state, {events: state.events.filter(event => event.id !== eventID)}
    )
    case "ADD_EVENT":
      return Object.assign({}, state, {
        events: state.events.concat(action.payload)
      });
    default:
      return state
  }
}
