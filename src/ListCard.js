import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import { Container, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, List, ListItem } from "@material-ui/core";
import { unfold } from "ramda";

// import MenuIcon from '@material-ui/icons/Menu';
import SortIcon from '@material-ui/icons/Sort';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ListCard = () => {
  const classes = useStyles();

  const [items] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );
  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Nombres
            </Typography>
            <IconButton color="inherit" >
              <SortIcon />
            </IconButton>
            <IconButton color="inherit" >
              <DeleteIcon />
            </IconButton>
            <IconButton color="inherit" >
              <AddIcon />
            </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
              </Menu>
          </Toolbar>
        </AppBar>
        <List>
          {items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ListCard;
