import React, { useRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from '@material-ui/core/TextField';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const AddItemPrompt = ({ showing, setShowing, items, setItems }) => {
  const inputRef = useRef();

  const onSubmit = () => {
    let enteredNum = -1;
    try {
      enteredNum = Number.parseInt(inputRef.current.value);
    } catch (error) {
      console.log("input is not a number");
    }

    if (enteredNum >= 0 && enteredNum <= 9999) {
      const i = items.indexOf(enteredNum);
      if (i === -1) { // if enteredNum is not in items
        setItems(oldItems => [...oldItems, enteredNum]);
        // sortListByGivenFilter()
      } else {
        console.log("entered number is already in list");
      }
    } else {
      console.log("entered number is not between 1 and 9999");
    }
  }

  return (
    <Dialog
      open={showing}>
      <DialogTitle>Add a Number</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A number can be between 0 and 9999
        </DialogContentText>
        <TextField inputRef={inputRef} autoFocus/>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setShowing(false)}
          color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSubmit();
            setShowing(false);
          }}
          color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddItemPrompt;