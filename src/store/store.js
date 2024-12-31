import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import clientReducers from "./reducers/clientReducers";
import productReducers from "./reducers/productReducers";
import shoppingCardReducers from "./reducers/shoppingCardReducers";

const rootReducer = combineReducers({
  client: clientReducers,
  product: productReducers,
  shoppingCard: shoppingCardReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
