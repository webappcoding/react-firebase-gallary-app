import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useFireStore from "../hooks/useFireStore";
import Grid from "@material-ui/core/Grid";
import PhotoCard from "./PhotoCard";
import PhotoModal from "./PhotoModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2, 0),
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));
const Gallary = () => {
  const classes = useStyles();
  const { docs } = useFireStore("images");

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const handleModalPopup = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {docs?.map((img) => (
          <Grid item key={img.id} xs={3}>
            <PhotoCard
              image={img}
              handleModalPopup={handleModalPopup}
              setSelectedImage={setSelectedImage}
            />
          </Grid>
        ))}
      </Grid>
      <PhotoModal open={open} setOpen={setOpen} image={selectedImage.url} />
    </div>
  );
};

export default Gallary;
