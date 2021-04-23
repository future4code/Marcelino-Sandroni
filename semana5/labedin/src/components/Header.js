import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

export const Header = () => (
  <Box bgcolor="tomato">
    <AppBar position="fixed" color="text">
      <Toolbar>
        <Grid container justify="center">
          <Typography variant="h3" color="text.primary">
            MI CURRICULUM
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  </Box>
);
