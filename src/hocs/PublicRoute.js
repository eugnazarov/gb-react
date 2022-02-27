import React from "react";
import { Navigate } from "react-router-dom";

export default ({ authenticated, Component }) =>
  !authenticated ? <Component /> : <Navigate to="/chats" />;
