import React, { useMemo } from "react";
import "./message.css";

const Message = ({ text, author }) => {
  const className = useMemo(() => {
    return author === "robot" ? "message--robot" : "message";
  });
  return (
    <div className={className}>
      <p className="message__author">{author}</p>
      <p className="message__text">{text}</p>
    </div>
  );
};

export default Message;
