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
const PhotoCard = ({ image, handleModalPopup, setSelectedImage }) => {
  const classes = useStyles();

  const handleSelect = () => {
    handleModalPopup(true);
    setSelectedImage(image);
  };
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea onClick={handleSelect}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={image.url}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default PhotoCard;
