import { applyMiddleware, combineReducers, createStore } from "redux";
import { ProfileReducer } from "./profile/profileReducer";
import { chatReducer } from "./chats/chatReducer";
import { postsReducer } from "./posts/postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  profile: ProfileReducer,
  chats: chatReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
