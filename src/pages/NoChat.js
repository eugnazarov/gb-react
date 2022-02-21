import React from "react";
import Chats from "../components/Chats/Chats";
import { useSelector } from "react-redux";
import { chats } from "../store/chats/selectors";

const NoChat = () => {
  const chatList = useSelector(chats);
  return (
    <div>
      No chat
      <Chats chats={chatList} />
    </div>
  );
};

export default NoChat;
