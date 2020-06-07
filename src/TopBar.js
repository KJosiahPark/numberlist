import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import SortIcon from "@material-ui/icons/Sort";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const TopBar = ({selected, setSelected, deleteItem, setShowingAddItem}) => {

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
          onClick={clearSelected} >
          <IndeterminateCheckBoxIcon />
        </IconButton>}
        <IconButton color="inherit">
          <SortIcon />
        </IconButton>
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