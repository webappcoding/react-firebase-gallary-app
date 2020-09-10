import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useFireStore from "../hooks/useFireStore";
import Grid from "@material-ui/core/Grid";
import PhotoCard from "./PhotoCard";

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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {docs?.map((img) => (
          <Grid item key={img.id} xs={3}>
            <PhotoCard image={img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gallary;
