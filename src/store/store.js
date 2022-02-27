import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { ProfileReducer } from "./profile/profileReducer";
import { chatReducer } from "./chats/chatReducer";
import { postsReducer } from "./posts/postsReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  profile: ProfileReducer,
  chats: chatReducer,
  posts: postsReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
