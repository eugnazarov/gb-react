import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/Chat";
import { chats } from "./store/chats/selectors";
import { useSelector } from "react-redux";
import NoChat from "./pages/NoChat";
import Api from "./pages/Api";

const App = () => {
  const chatList = useSelector(chats);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<Chat />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Api />} />
          <Route path="/nochat" element={<NoChat />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
