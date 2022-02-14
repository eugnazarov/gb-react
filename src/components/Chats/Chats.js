import React from "react";

import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
const Chats = ({ chats }) => (
  <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <List>
      {Object.keys(chats).map((id) => (
        <ListItem>
          <ListItemButton>
            <Link to={`/${id}`}>{chats[id].name}</Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Chats;
