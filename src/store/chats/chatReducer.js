import { ADD_CHAT, ADD_MESSAGE } from "./types";

const INITIAL_STATE = {
  chats: {
    id1: {
      name: "Chat1",
      messages: [{ text: "FirstMessage", id: 0, author: "robot" }],
    },
    id2: {
      name: "Chat2",
      messages: [{ text: "FirstMessageHereToo!", id: 0, author: "robot" }],
    },
  },
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.id]: {
            ...state.chats[action.payload.id],
            messages: [
              ...state.chats[action.payload.id].messages,
              action.payload.message,
            ],
          },
        },
      };
    }
    case ADD_CHAT: {
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.id]: {
            name: action.payload.name,
            messages: [],
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
