import React, { useState, useRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from '@material-ui/core/TextField';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const AddItemPrompt = ({ showing, setShowing, items, setItems }) => {
  const [inputErr, setInputErr] = useState(false);
  const [errText, setErrText] = useState("");
  const inputRef = useRef();

  const onSubmit = () => {
    let enteredNum = -1;
    try {
      enteredNum = Number.parseInt(inputRef.current.value);
    } catch (error) {
      setInputErr(true);  
      setErrText("input is not a number");
      console.log("HERE");
      return 0;
    }
    console.log(enteredNum);
    if (!Number.isNaN(enteredNum)) {
      if (enteredNum >= 0 && enteredNum <= 9999) {
        const i = items.indexOf(enteredNum);
        if (i === -1) { // if enteredNum is not in items
          setItems(oldItems => [...oldItems, enteredNum]);
          // sortListByGivenFilter()
          setInputErr(false);
          setErrText("");
          setShowing(false);
        } else {
          setInputErr(true);
          setErrText("entered number is already in list");
        }
      } else {
        setInputErr(true);
        setErrText("entered number is not between 1 and 9999");
      }
    } else {
      setInputErr(true);  
      setErrText("input is not a number");
      console.log("HERE");
      return 0;
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
        <TextField 
        autoFocus
        inputRef={inputRef} 
        error={inputErr}
        helperText={errText}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setShowing(false);
            setInputErr(false);
            setErrText("");
          }}
          color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSubmit();
          }}
          color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddItemPrompt;