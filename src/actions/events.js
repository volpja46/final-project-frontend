export function getEvents () {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/events')
    .then(response => response.json())
    .then(eventsData => dispatch(setEvents(eventsData)))
  }
}
export function setEvents(eventsData) {
  return {
    type: "SET_CURRENT_EVENTS",
    payload: eventsData
  }
}

export function addEvent(newEvent){
  debugger
  return (dispatch) => {
 fetch('http://localhost:3000/api/v1/events', {
     method: 'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json',
       'Authorization':`Bearer: ${localStorage.getItem("jwt")}`
     },
     body: JSON.stringify(newEvent)
   }).then(res => res.json())
     .then(eventsData => dispatch(addEvents(eventsData)))
  }
 }

 export function addEvents(eventsData) {
   return {
     type: "ADD_EVENT",
     payload: eventsData
   }
 }


 export function removeTheEvent(eventId){
   return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({
       id: eventId
     })
   }).then(res => res.json())
     .then(res => {
       let deletedEventId = res.deleted_event_id
       dispatch(removeEvent(deletedEventId))
     })
    }
  }

  export function removeEvent(deletedEventId) {
    return {
      type: "REMOVE_EVENT",
      payload: deletedEventId
    }
  }

  export function editTheEvent(finalEditedEvent) {
    return (dispatch) => {
     fetch(`http://localhost:3000/api/v1/events/${finalEditedEvent.id}`, {
       method: 'PATCH',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
     body: JSON.stringify(finalEditedEvent)
      }).then(res => res.json())
        .then(editedEvent => dispatch(editEvent(editedEvent)))
      }
    }
      export function editEvent(editedEvent) {
        return {
          type: "EDIT_EVENT",
          payload: editedEvent
        }
      }
