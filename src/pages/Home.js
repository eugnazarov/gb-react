import React from "react";
import { Link } from "react-router-dom";
import Chats from "../components/Chats/Chats";

const Home = ({ chats }) => {
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <Chats chats={chats} />
    </div>
  );
};

export default Home;
