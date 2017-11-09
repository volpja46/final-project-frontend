export default function giftsReducer(state = {gifts:[]} , action) {
  switch (action.type) {
    case "SET_CURRENT_GIFTS":
      return Object.assign({}, state, {gifts: action.payload})
    case "REMOVE_GIFT":
      const giftId = action.payload;
      return Object.assign({}, state, {gifts: state.gifts.filter(gift => gift.id !== giftId)}
    )
    case "EDIT_GIFT":
    const editedGiftId = action.payload;
     let editedGift = state.gifts.filter(gift => gift.id === editedGiftId)
      return Object.assign({}, state, {gifts: action.payload})
    case "ADD_GIFT":
      return Object.assign({}, state, {
        gifts: state.gifts.concat(action.payload)
      });
    default:
      return state
  }
}
