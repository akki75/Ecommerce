import { combineReducers } from "redux";
import { ProductReducer , selectedProductReducer, cartReducer} from "./ProductReducer";

const reducers = combineReducers ({
   allProducts : ProductReducer ,
   product : selectedProductReducer,
   cart: cartReducer,
});


export default reducers;



