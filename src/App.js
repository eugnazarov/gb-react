import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/Chat";
import { chats } from "./store/chats/selectors";
import { useSelector } from "react-redux";
import NoChat from "./pages/NoChat";
import Api from "./pages/Api";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import PrivateRoute from "./hocs/PrivateRoute";
import PublicRoute from "./hocs/PublicRoute";

const App = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            authenticated={authed}
            path="/profile"
            element={
              <PrivateRoute authenticated={authed} Component={Profile} />
            }
          />
          <Route
            authenticated={authed}
            path="/:id"
            element={<PrivateRoute authenticated={authed} Component={Chat} />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Api />} />
          <Route authenticated={authed} path="/nochat" element={<NoChat />} />
          <Route
            exact
            path="/login"
            element={<PublicRoute Component={Login} authenticated={authed} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
