import { ActionTypes } from "../constants/Action-type"

export const setProducts = (products) => {
  console.log(products)
  return {
    type : ActionTypes.SET_PRODUCTS,
    payload : products 
  }
}
export const selectedProduct = (product) => {
    return {
      type : ActionTypes.SELECTED_PRODUCT,
      payload : product 
    }
  }
  export const RemoveselectedProduct = () => {
    return {
      type : ActionTypes.REMOVE_SELECTED_PRODUCT,
      
    }
  }

  export const addToCart = (product) => {
    return (dispatch, getState) => {
      const { cart } = getState();
      const existingItem = cart.cartItems.find(item => item.id === product.id);
  
      if (existingItem) {
        // If the product already exists in the cart, increase its quantity
        console.log("Adding Quantity:", product.id);
        dispatch({
          type: ActionTypes.ADD_QUANTITY,
          payload: product.id  // You may need to pass additional information to identify the product
        });
      } else {
        // If the product is not in the cart, add it with quantity 1
        console.log("Adding to Cart:", product);
        dispatch({
          type: ActionTypes.ADD_TO_CART,
          payload: product
        });
      }
    };
  };

  

  

  
  

  // These functions (setProducts and selectedProduct) are action creators. They encapsulate the logic of creating Redux actions.