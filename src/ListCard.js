import React, { useState } from "react";

import { Toolbar, List, ListItem, Checkbox, IconButton } from "@material-ui/core";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ClearIcon from '@material-ui/icons/Clear';

import { makeStyles } from '@material-ui/core/styles';

import TopBar from "./TopBar";

const useStyles = makeStyles({
  listItemDisplay: {
    "&:hover + $deleteItemButton": {
      display: "block",
    }
  },
  deleteItemButton: {
    display: "none",
    "&:hover": {
      display: "block",
    }
  },
});

const ListCard = ({items, setItems, setShowingAddItem}) => {
  const classes = useStyles();

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
        setItems={setItems}
        selected={selected}
        setSelected={setSelected}
        deleteItem={deleteItem}
        setShowingAddItem={setShowingAddItem} />
      <Toolbar />
      <List>
        {items.map(item => (
          <ListItem
            key={item}
            className={classes.listItemDisplay}
            divider>
            <Checkbox
              checked={selected.includes(item)}
              onChange={() => handleCheck(item)}
              color="primary"/>
            <span>{item}</span>
            <ListItemSecondaryAction className={classes.deleteItemButton}>
              <IconButton>
                  <ClearIcon onClick={() => deleteItem(item)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListCard;