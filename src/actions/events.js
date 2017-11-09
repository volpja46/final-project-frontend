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
