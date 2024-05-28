import { ActionTypes } from "../constants/Action-type";

const intialState = {
  products: [],
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
default:
   return state;
  }
};

export const selectedProductReducer = (state={}, { type, payload }) => {
  //  console.log("type, payload", type, payload);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {}
    default:
      return state;
  }
};

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, increase its quantity
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the product is not in the cart, add it with quantity 1
        return { ...state, cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] };
      }
    case ActionTypes.ADD_QUANTITY:
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        // Increase quantity of existing item
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        return state; // If item not found, return current state
      }
    default:
      return state;
  }
};




