import React, { useState } from "react";

import { Toolbar, List, ListItem, Checkbox, IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import "./ListCard.css";
import TopBar from "./TopBar";

const ListCard = ({items, setItems, setShowingAddItem}) => {
  const [selected, setSelected] = useState([]);

  const handleCheck = item => {
    setSelected(prevSelects => {
      const i = prevSelects.indexOf(item);
      // if item is not already selected
      if (i === -1) {
        // add item
        return [...prevSelects, item];
      } else {
        // remove item
        prevSelects[i] = prevSelects[prevSelects.length - 1];
        prevSelects.pop();
      }
      return [...prevSelects];
    });
  };

  const deleteItem = toDelete => {
    setItems(prevItems => {
      return prevItems.filter(item => toDelete !== item);
    })
    setSelected(prevSelects => {
      return prevSelects.filter(item => toDelete !== item);
    })
  }

  return (
    <div>
      <TopBar
        selected={selected}
        setSelected={setSelected}
        deleteItem={deleteItem}
        setShowingAddItem={setShowingAddItem} />
      <Toolbar />
      <List>
        {items.map(item => (
          <ListItem key={item} divider>
            <Checkbox
              checked={selected.includes(item)}
              onChange={() => handleCheck(item)}
              color="primary"/>
            <span style={{flex: 1}}>{item}</span>
            <IconButton style={{display: "auto"}}>
                <ClearIcon onClick={() => deleteItem(item)} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListCard;
