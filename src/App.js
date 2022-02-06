import React, { useEffect, useRef, useState } from "react";

import MessageList from "./components/MessageList/MessageList";
import useInput from "./components/hooks/useInput";
import "./App.css";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Chats from "./components/Chats/Chats";

const App = () => {
  const input = useInput();

  const inputRef = useRef(null);

  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      author: "John",
      text: input.value,
      id: `human__${Date.now()}`,
    };
    setMessageList((prevState) => [...prevState, newMessage]);

    input.setValue("");
  };

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author !== "robot") {
      const newMessage = {
        author: "robot",
        text: "Hello from robot",
        id: `robot__${Date.now()}`,
      };
      setTimeout(() => {
        setMessageList((prevState) => [...prevState, newMessage]);
        inputRef.current.focus();
      }, 500);
    }
  }, [messageList]);

  const chats = [
    { name: "Javascript", id: "1" },
    { name: "Python", id: "2" },
    { name: "Swift", id: "3" },
    { name: "Golang", id: "4" },
  ];

  return (
    <div className="App">
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

export default App;
