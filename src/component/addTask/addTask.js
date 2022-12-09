import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./addTask.module.scss";
import { useState } from "react";
function AddTask({ open, setOpen, setStep }) {
  const [title, setTitle] = useState("");

  const handleAddClickOpen = () => {
    setOpen(true);
  };

  const handleAddClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleAddClose}
        style={{ transform: "scale(2)" }}
      >
        <DialogTitle className={styles.dialog__title}>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Title"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose}>Cancel</Button>
          <Button
            onClick={() => {
              setStep((step) => {
                step[0] =
                  step[0] && step[0].length ? [...step[0], title] : [title];
                return step;
              });
              handleAddClose();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default AddTask;
