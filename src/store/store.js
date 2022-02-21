import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProfileReducer } from "./profile/profileReducer";
import { chatReducer } from "./chats/chatReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  profile: ProfileReducer,
  chats: chatReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,

  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
