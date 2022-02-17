import { combineReducers, createStore } from "redux";
import { ProfileReducer } from "./profile/profileReducer";

const rootReducer = combineReducers({
  profile: ProfileReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
