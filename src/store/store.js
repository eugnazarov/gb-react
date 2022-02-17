import { combineReducers, createStore } from "redux";
import { ProfileReducer } from "./profile/profileReducer";
import { chatReducer } from "./chats/chatReducer";

const rootReducer = combineReducers({
  profile: ProfileReducer,
  chats: chatReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
