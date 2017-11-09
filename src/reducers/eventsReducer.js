export default function eventsReducer(state = { events:[] } , action) {
  switch (action.type) {
    case "SET_CURRENT_EVENTS":
      return Object.assign({}, state, {events: action.payload})
    case "REMOVE_EVENT":
      const eventId = action.payload;
      return Object.assign({}, state, {events: state.events.filter(event => event.id !== eventId)}
    )
    case "EDIT_EVENT":
    let editedEventId = action.payload.id
    let newEvents = state.events.filter(event => event.id !== editedEventId)
    return Object.assign({}, state, {events: state.events.filter(event => event.id !== editedEventId).concat(action.payload)}
    )
    case "ADD_EVENT":
      return Object.assign({}, state, {
        events: state.events.concat(action.payload)
      });
    default:
      return state
  }
}
