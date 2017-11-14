export default function giftsReducer(state = {gifts:[]} , action) {
  switch (action.type) {
    case "SET_CURRENT_GIFTS":
      return Object.assign({}, state, {gifts: action.payload})
    case "REMOVE_GIFT":
      const giftId = action.payload;
      return Object.assign({}, state, {gifts: state.gifts.filter(gift => gift.id !== giftId)}
    )
    case "EDIT_GIFT":
    let editedGiftId = action.payload.id
    return Object.assign({}, state, {gifts:
      state.gifts.map(gift => {
        if (gift.id === editedGiftId) {
          return action.payload
        } else {
          return gift
        }
      })
    }
  )
     case "ADD_GIFT":
      return Object.assign({}, state, {
        gifts: state.gifts.concat(action.payload)
      });
    default:
      return state
  }
}
