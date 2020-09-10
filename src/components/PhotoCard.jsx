import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});
const PhotoCard = ({ image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={image.url}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
};

export default PhotoCard;
