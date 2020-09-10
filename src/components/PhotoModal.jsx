import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PhotoModal = ({ open, setOpen, image }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      maxWidth="md"
      scroll="body"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent
        style={{ padding: 0, overflowY: "hidden", display: "flex" }}
      >
        <img src={image} alt="ok" style={{ width: "100%" }} />
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
