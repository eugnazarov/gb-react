import React from "react";
import { Link } from "react-router-dom";
import Chats from "../components/Chats/Chats";
import { useSelector } from "react-redux";
import { chats } from "../store/chats/selectors";

const Home = () => {
  const chatList = useSelector(chats);
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <Link to="/posts">Api Posts</Link>
      <Chats chats={chatList} />
    </div>
  );
};

export default Home;
