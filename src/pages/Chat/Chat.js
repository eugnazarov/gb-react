import MessageList from "../../components/MessageList/MessageList";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useRef } from "react";
import useInput from "../../components/hooks/useInput";

import "./Chat.css";
import { useParams, Navigate, Link } from "react-router-dom";
import { chats } from "../../store/chats/selectors";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MESSAGE } from "../../store/chats/types";

const Chat = () => {
  const inputRef = useRef(null);

  const input = useInput();

  const { id } = useParams();

  const chatList = useSelector(chats);

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatList[id]) {
      if (
        chatList[id].messages[chatList[id].messages.length - 1]?.author !==
          "robot" &&
        !!chatList[id].messages.length
      ) {
        const newMessage = {
          author: "robot",
          text: "Hello from robot",
          id: `robot__${Date.now()}`,
        };
        setTimeout(() => {
          dispatch({
            type: ADD_MESSAGE,
            payload: {
              id,
              message: newMessage,
            },
          });
          inputRef.current.focus();
        }, 500);
      }
    }
  }, [chatList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      author: "John",
      text: input.value,
      id: `human__${Date.now()}`,
    };
    dispatch({
      type: ADD_MESSAGE,
      payload: {
        id,
        message: newMessage,
      },
    });

    input.setValue("");
  };

  if (!chatList[id]) {
    return <Navigate to="/" />;
  }
  return (
    <div className="wrapper">
      <div>
        <Link to={`/home`}>Home</Link>
        <MessageList messageList={chatList[id].messages} />
        <FormControl sx={{ m: 5, width: "35ch" }} variant="outlined">
          <Input
            inputRef={inputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleSubmit}
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
            id="input"
            multiline
            autoFocus
            value={input.value}
            onChange={input.onChange}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Chat;
