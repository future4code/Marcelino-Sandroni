import React from "react";
import "@fontsource/roboto";
import Post from "./components/Post/Post";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

body {
  scroll-behavior: smooth;
}
  
`;

const AppGrid = styled(Grid)`
  width: 100%;
  padding: 1rem 0; ;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;

  > * {
    margin: 1rem 10px;
  }
`;

class App extends React.Component {
  state = {
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
    newAdd: false,
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/150/150?1",
        fotoPost: "https://picsum.photos/740/550?1",
        comentarios: ["comentario1", "comentario2"],
      },
      {
        nomeUsuario: "amandinha",
        fotoUsuario: "https://picsum.photos/150/150?2",
        fotoPost: "https://picsum.photos/740/550?2",
        comentarios: [],
      },
      {
        nomeUsuario: "marcelino",
        fotoUsuario: "https://picsum.photos/150/150?3",
        fotoPost: "https://picsum.photos/740/550?3",
        comentarios: [],
      },
    ],
  };

  validatePic = (url) => {
    const regex = /^http[s?][:\/\/](\w*.?\/*)*(.png|.jpg)$/;
    return regex.test(url);
  };

  atualizarNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };

  atualizarFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };

  atualizarFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  addPost = () => {
    let userPic = this.state.inputFotoUsuario;
    let postPic = this.state.inputFotoPost;

    if (!this.validatePic(userPic)) {
      userPic = "https://picsum.photos/740/550?" + this.state.posts.length + 1;
      alert = "oi";
    }

    if (!this.validatePic(postPic)) {
      postPic = "https://picsum.photos/740/550?" + this.state.posts.length + 1;
    }

    const newPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: userPic,
      fotoPost: postPic,
      comentarios: [],
    };

    this.setState({ posts: [...this.state.posts, newPost] });

    console.log(this.state.posts);

    this.setState({
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
      newAdd: true,
    });
  };

  componentDidUpdate() {
    if (this.state.posts.length > 3 && this.state.newAdd) {
      // window.scrollTo(0, document.body.scrollHeight);
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });

      this.setState({ newAdd: false });
    }
  }

  aoEnviarComentario = (valor, index) => {
    const novoPost = [...this.state.posts];
    novoPost[index].comentarios.push(valor);
    this.setState({ posts: [...novoPost] });
  };

  render() {
    let alert;
    const listPosts = this.state.posts.map((item, index) => (
      <Post
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
        comentarios={item.comentarios || []}
        aoEnviarComentario={this.aoEnviarComentario}
        index={index}
        key={index}
      />
    ));

    return (
      <Container maxWidth="lg">
        <GlobalStyle />
        <AppGrid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          width="100%"
        >
          <Typography variant="h3" component="h1">
            Insta4
          </Typography>
          <Controls>
            <TextField
              value={this.state.inputNomeUsuario}
              onChange={this.atualizarNomeUsuario}
              variant="outlined"
              label="Nome"
            />
            <TextField
              value={this.state.inputFotoUsuario}
              onChange={this.atualizarFotoUsuario}
              variant="outlined"
              label="Foto"
            />
            <TextField
              value={this.state.inputFotoPost}
              onChange={this.atualizarFotoPost}
              variant="outlined"
              label="Post"
            />
            <Button variant="contained" color="seconday" onClick={this.addPost}>
              <AddIcon></AddIcon>
            </Button>
          </Controls>
          {listPosts}
        </AppGrid>
        {alert}
      </Container>
    );
  }
}

export default App;
