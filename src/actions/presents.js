export function getPresents () {
  debugger
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/presents')
    .then(response => response.json())
    .then(presentssData => dispatch(setPresents(presentssData)))
  }
}
export function setPresents(presentssData) {
  return {
    type: "SET_CURRENT_PRESENTS",
    payload: presentssData
  }
}

export function addPresent(newPresent){
  return (dispatch) => {
 fetch('http://localhost:3000/api/v1/presents', {
     method: 'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json',
       'Authorization':`Bearer: ${localStorage.getItem("jwt")}`
     },
     body: JSON.stringify(newPresent)
   }).then(res => res.json())
     .then(presentsData => dispatch(addPresents(presentsData)))
  }
 }

 export function addPresents(presentsData) {
   return {
     type: "ADD_PRESENT",
     payload: presentsData
   }
 }

 // export function removeTheGift(giftId){
 //   return (dispatch) => {
 //    fetch(`http://localhost:3000/api/v1/gifts/${giftId}`, {
 //      method: 'delete',
 //      headers: {
 //        Accept: 'application/json',
 //        'Content-Type': 'application/json'
 //      },
 //     body: JSON.stringify({
 //       id: giftId
 //     })
 //   }).then(res => res.json())
 //     .then(deletedGiftId => dispatch(removeGift(deletedGiftId)))
 //    }
 //  }
 //
 //  export function removeGift(deletedGiftId) {
 //    return {
 //      type: "REMOVE_GIFT",
 //      payload: deletedGiftId.deleted_gift_id
 //    }
 //  }
 //
 //  export function editTheGift(finalEditedGift) {
 //    return (dispatch) => {
 //     fetch(`http://localhost:3000/api/v1/gifts/${finalEditedGift.id}`, {
 //       method: 'PATCH',
 //       headers: {
 //         Accept: 'application/json',
 //         'Content-Type': 'application/json'
 //       },
 //     body: JSON.stringify(finalEditedGift)
 //      }).then(res => res.json())
 //        .then(editedGift => dispatch(editGift(editedGift)))
 //      }
 //    }
 //
 //      export function editGift(editedGift) {
 //        return {
 //          type: "EDIT_GIFT",
 //          payload: editedGift
 //        }
 //      }
