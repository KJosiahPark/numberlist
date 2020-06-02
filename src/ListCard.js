import React, { useState } from "react";

import { Toolbar, List, ListItem, Checkbox, IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import { unfold } from "ramda";

import "./ListCard.css";
import TopBar from "./TopBar";

const ListCard = () => {
  const [items, setItems] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );

  return (
    <div>
      <TopBar />
      <Toolbar />
      <List>
        {items.map((item, index) => (
          <ListItem key={item} divider>
            <Checkbox color="primary"/>
            <span style={{flex: 1}}>{item}</span>
            <IconButton aria-label="delete">
                <ClearIcon onClick={() => setItems((prevItems) => {
                  return prevItems.filter((num) => item !== num);
                })} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListCard;
