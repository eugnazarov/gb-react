import React, { useState } from "react";
import "./MessageList.css";
import Message from "../Message/Message";

const MessageList = ({ messageList }) => {
  return (
    <div className="list">
      {messageList.map(({ text, author, id }) => (
        <Message author={author} key={id} text={text} />
      ))}
    </div>
  );
};

export default MessageList;
