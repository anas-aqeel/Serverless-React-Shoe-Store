let reducer = (state, { type, payload }) => {
  let oldItem = state.cart.find((e) => e.id == payload.id);
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart.filter((e) => e.id != payload.id),
          oldItem ? { ...oldItem, quantity: oldItem.quantity + 1 } : payload,
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [
          ...state.cart.filter((e) => e.id != payload.id),
          ...(oldItem?.quantity > 1
            ? [{ ...oldItem, quantity: oldItem.quantity - 1 }]
            : []),
        ],
      };
    case "Delete_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((e) => e.id != payload.id)],
      };
    default:
      break;
  }
};
export default reducer;
