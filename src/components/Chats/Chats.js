import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
const Chats = ({ chats }) => (
  <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <List>
      {chats.map((chat) => (
        <ListItem>
          <ListItemButton>
            <ListItemText primary={chat.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Chats;
