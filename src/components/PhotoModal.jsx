import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PhotoModal = () => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ padding: 0 }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/react-gallary-app.appspot.com/o/8AE2DCF0-6A1A-4BC9-A46A-7CE51BF6BDAF.jpeg?alt=media&token=ddcea118-8a9e-45a7-92f8-1bf8c877a1bd"
            alt="ok"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoModal;
