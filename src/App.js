import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/Chat";

const App = () => {
  const chats = {
    id1: {
      name: "Chat1",
      messages: [{ text: "FirstMessage", author: "robot" }],
    },
    id2: {
      name: "Chat2",
      messages: [{ text: "FirstMessageHereToo!", author: "robot" }],
    },
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<Chat chats={chats} />} />
          <Route exact path="/" element={<Home chats={chats} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
