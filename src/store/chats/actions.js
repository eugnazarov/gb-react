import { ADD_MESSAGE } from "./types";

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
  console.log(chatId);
  if (message.author !== "robot") {
    const botMessage = {
      author: "robot",
      text: "Hello from robot",
      id: `robot__${Date.now()}`,
    };
    setTimeout(
      () =>
        dispatch({
          type: ADD_MESSAGE,
          payload: { id: chatId, message: botMessage },
        }),
      1500
    );
  }
};
