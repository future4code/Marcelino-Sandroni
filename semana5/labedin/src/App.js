//imr to import reat
import React from "react";

//import './App.css';
import CardGrande from "./components/CardGrande";
import CardPequeno from "./components/CardPequeno";

//Styles
import "@fontsource/roboto";
import styled from "styled-components";
import { ButtonAdd, ButtonFace, ButtonTwitter } from "./components/Buttons";
import { Header } from "./components/Header";
//Material UI
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Box, Avatar, AppBar, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
  },
});

const Container = styled(Grid)`
  min-height: ${(props) => props.h || "300px"};
`;

const Item = styled(Grid)`
  margin: 20px auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid container xs={10} justify="center" direction="column" spacing={5}>
          <Item container item xs={1} spacing={1} wrap="nowrap">
            <Header />
          </Item>
          <Box mt={8} />
          <Grid
            container
            item
            xs
            spacing={1}
            direction="column"
            justify="space-around"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Typography variant="h4" component="h1">
              Curriculum
            </Typography>
            <Button variant="primary" />
            <Avatar alt="me" src="images/me.jpeg" />
            <CardGrande
              name="Marcelino Sandroni"
              description="Hi, I'm Marcelino, a full stack web development studying."
            />
            <CardPequeno
              mail="marcelino.sandroni@gmail.com"
              adress="Wonderful Street, 123, Good Townhall, San Pablo, Brazil"
            />
            <CardPequeno />

            <ButtonAdd />
            <Typography variant="h4">Work Experience</Typography>

            <CardGrande
              //image="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
              name="Labenu"
              description="Learning all languages needed to work in the market."
            />

            <CardGrande
              //imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
              name="NASA"
              description="Bootcamp on mars with my friend Marcians"
            />

            <Typography variant="h4">My Social Network</Typography>

            <ButtonFace />
            <ButtonTwitter />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
