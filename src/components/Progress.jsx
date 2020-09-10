import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Progress = ({ file, setFile }) => {
  const classes = useStyles();
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={Math.round(progress)} />
    </div>
  );
};

export default Progress;
