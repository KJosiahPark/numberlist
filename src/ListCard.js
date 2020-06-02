import React, { useState } from "react";

import { Container, AppBar, Toolbar, List, ListItem, Checkbox } from "@material-ui/core";
import { unfold } from "ramda";

import "./ListCard.css";
import TopBar from "./TopBar";

const ListCard = () => {
  const [items] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );

  return (
    <div>
      <TopBar />
      <Toolbar />
      <List>
        {items.map((item) => (
          <ListItem key={item} divider>
            <Checkbox color="primary"/>
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListCard;
