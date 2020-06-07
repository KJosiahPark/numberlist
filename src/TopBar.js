import React, { useState } from "react";

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import SortIcon from "@material-ui/icons/Sort";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const TopBar = ({setItems, selected, setSelected, deleteItem, setShowingAddItem}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortAsc = () => {
    setItems(oldList => {
      oldList.sort((a, b) => a - b);
      return [...oldList];
    })
  }

  const sortDec = () => {
    setItems(oldList => {
      oldList.sort((a, b) => b - a);
      return [...oldList];
    })
  }

  const clearSelected = () => {
    setSelected([]);
  }

  const deleteSelected = () => {
    selected.forEach(item => {
      deleteItem(item);
    });
    clearSelected();
  }

  const hasSelections = !(selected.length === 0);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{flex: 1}}>
          Nombres {hasSelections && `(${selected.length})`}
        </Typography>
        {hasSelections && 
        <IconButton
          color="inherit"
          onClick={clearSelected}>
          <IndeterminateCheckBoxIcon />
        </IconButton>}
        <IconButton
          color="inherit"
          onClick={handleClick}>
          <SortIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={() => {
            sortAsc();
            handleClose();
          }}>Ascending</MenuItem>
          <MenuItem onClick={() => {
            sortDec();
            handleClose();
          }}>Descending</MenuItem>
        </Menu>
        <IconButton
          color="inherit"
          onClick={deleteSelected}
          disabled={!hasSelections}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="inherit"
          onClick={setShowingAddItem}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;