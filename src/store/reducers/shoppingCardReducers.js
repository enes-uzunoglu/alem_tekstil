const initialCardState = {
  card: [],
  payment: {},
  address: {},
};

const shoppingCardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case "SET_CARD":
      return { ...state, card: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default shoppingCardReducer;
