import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
const AddItemPrompt = ({ showing, setShowing, items, setItems }) => {
  return (
    <Dialog
      open={showing}>
      <DialogTitle>Add a Number</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A number can be between 0 and 9999
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowing(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => setShowing(false)} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddItemPrompt;