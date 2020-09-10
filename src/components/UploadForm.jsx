import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Progress from "./Progress";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  button: {
    border: "2px solid " + theme.palette.primary.main,
  },
}));

const UploadForm = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div className={classes.root}>
      <form>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.button}
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>

        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <Progress file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
