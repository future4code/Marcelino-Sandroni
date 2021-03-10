import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Container";

const CardGrande = ({ name, description, image }) => (
  <Box m="200px auto" p={5} textAlign="center">
    <Grid container direction="column" justify="center" spacing={5}>
      <img src={image} alt="something something" />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </Grid>
  </Box>
);

export default CardGrande;
