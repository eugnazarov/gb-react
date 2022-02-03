import React, { useEffect, useState } from "react";

import MessageList from "./components/MessageList/MessageList";
import useInput from "./components/hooks/useInput";
import "./App.css";

const App = () => {
  const input = useInput();

  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      author: "John",
      text: input.value,
    };
    setMessageList((prevState) => [...prevState, newMessage]);
    input.setValue("");
  };

  useEffect(() => {
    if (
      messageList[messageList.length - 1] &&
      messageList[messageList.length - 1].author !== "robot"
    ) {
      const newMessage = {
        author: "robot",
        text: "Hello from robot",
      };
      setTimeout(() => {
        setMessageList((prevState) => [...prevState, newMessage]);
      }, 1500);
    }
  }, [messageList]);
  return (
    <div className="App">
      <MessageList messageList={messageList} />
      <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
        <p>Введите текст сообщения</p>
        <input
          style={{ padding: "10px", margin: "10px" }}
          value={input.value}
          onChange={({ target }) => input.setValue(target.value)}
        />
      </form>
    </div>
  );
};

export default App;
