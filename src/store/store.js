import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../Reducer/root";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  console.log("store data:", store.getState());
});

export default store;