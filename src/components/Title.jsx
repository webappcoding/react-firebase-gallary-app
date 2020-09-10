import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
const Title = () => {
  return (
    <Box my={3}>
      <Typography variant="h1" align="center" color="primary">
        React Firebase Photo Gallary
      </Typography>
      {/* <Divider /> */}
    </Box>
  );
};

export default Title;
