import MessageList from "../../components/MessageList/MessageList";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useMemo, useRef, useState } from "react";
import useInput from "../../components/hooks/useInput";
import Chats from "../../components/Chats/Chats";

import "./Chat.css";
import { useParams } from "react-router-dom";

const Chat = ({ chats }) => {
  const inputRef = useRef(null);

  const input = useInput();

  const { id } = useParams();

  const messageList = chats[id].messages;

  ///костыль для ререндера
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author !== "robot") {
      const newMessage = {
        author: "robot",
        text: "Hello from robot",
        id: `robot__${Date.now()}`,
      };
      setTimeout(() => {
        messageList.push(newMessage);
        setVal((p) => !p);
        inputRef.current.focus();
      }, 500);
    }
  }, [chats[id].messages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      author: "John",
      text: input.value,
      id: `human__${Date.now()}`,
    };
    messageList.push(newMessage);

    input.setValue("");
  };

  return (
    <div className="wrapper">
      <Chats chats={chats} />
      <div>
        <MessageList messageList={messageList} />
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
