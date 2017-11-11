export function getGifts () {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/gifts')
    .then(response => response.json())
    .then(giftsData => dispatch(setGifts(giftsData)))
  }
}

export function setGifts(giftsData) {
  return {
    type: "SET_CURRENT_GIFTS",
    payload: giftsData
  }
}

export function addGift(newGift){
  return (dispatch) => {
 fetch('http://localhost:3000/api/v1/gifts', {
     method: 'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json',
       'Authorization':`Bearer: ${localStorage.getItem("jwt")}`
     },
     body: JSON.stringify(newGift)
   }).then(res => res.json())
     .then(giftsData => dispatch(addGifts(giftsData)))
  }
 }

 export function addGifts(giftsData) {
   return {
     type: "ADD_GIFT",
     payload: giftsData
   }
 }

 export function removeTheGift(giftId){
   return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/gifts/${giftId}`, {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({
       id: giftId
     })
   }).then(res => res.json())
     .then(deletedGiftId => dispatch(removeGift(deletedGiftId)))
    }
  }

  export function removeGift(deletedGiftId) {
    return {
      type: "REMOVE_GIFT",
      payload: deletedGiftId.deleted_gift_id
    }
  }

  export function editTheGift(finalEditedGift) {
    return (dispatch) => {
     fetch(`http://localhost:3000/api/v1/gifts/${finalEditedGift.id}`, {
       method: 'PATCH',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
     body: JSON.stringify(finalEditedGift)
      }).then(res => res.json())
        .then(editedGift => dispatch(editGift(editedGift)))
      }
    }

      export function editGift(editedGift) {
        return {
          type: "EDIT_GIFT",
          payload: editedGift
        }
      }
