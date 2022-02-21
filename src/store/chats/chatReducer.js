import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./types";

const INITIAL_STATE = {
  chats: {
    id1: {
      name: "id1",
      messages: [{ text: "FirstMessage", id: 0, author: "robot" }],
    },
    id2: {
      name: "id2",
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
    case DELETE_CHAT: {
      return {
        ...state,

        chats: Object.fromEntries(
          Object.entries(state.chats).filter((ch) => {
            console.log(ch);
            return ch[0] !== action.payload.id;
          })
        ),
      };
    }
    default: {
      return state;
    }
  }
};
