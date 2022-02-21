import React from "react";

import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_CHAT, DELETE_CHAT } from "../../store/chats/types";
const Chats = ({ chats }) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {Object.keys(chats).map((id) => (
          <ListItem>
            <ListItemButton style={{ display: "flex" }}>
              <Link to={`/${id}`}>{chats[id].name}</Link>

              <Button
                onClick={() => {
                  dispatch({
                    type: DELETE_CHAT,
                    payload: {
                      id: id,
                    },
                  });
                }}
                color="error"
                variant="text"
              >
                delete
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() => {
          const id = Math.floor(Math.random() * 10000);
          dispatch({
            type: ADD_CHAT,
            payload: { id: `id${id}`, name: `Chat ${id}` },
          });
        }}
      >
        Add new chat
      </Button>
    </Box>
  );
};

export default Chats;
