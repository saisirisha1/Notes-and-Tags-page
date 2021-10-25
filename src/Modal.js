import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal(props) {
  const { open, handleClose } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" component="h2">
          <strong> ADD NOTE </strong>
        </Typography>
        <br></br>
        <Typography>
          <strong> Title </strong>
          <TextField
            style={{ marginLeft: "59px" }}
            id="outlined-basic"
            variant="outlined"
          />
        </Typography>
        <br></br>
        <Typography>
          <strong> Description </strong>
          <TextField
            style={{ marginLeft: "3px", width: "228px" }}
            id="outlined-multiline-static"
            multiline
            rows={4}
          />
        </Typography>
        <Typography>
          {" "}
          <strong> Tags </strong>
          <FormGroup style={{ border: "1px solid grey", width: "228px" }}>
            <FormControlLabel control={<Checkbox />} label="Tag 1" />
            <FormControlLabel control={<Checkbox />} label="Tag 2" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Tag 3"
            />
          </FormGroup>
        </Typography>
        <br></br>
        <br></br>
        <mat-dialog-actions style={{ marginLeft: "150px" }}>
          <Button variant="outlined" style={{ marginRight: "10px" }}>
            Cancel
          </Button>
          <Button variant="outlined">Add</Button>
        </mat-dialog-actions>
      </Box>
    </Modal>
  );
}
