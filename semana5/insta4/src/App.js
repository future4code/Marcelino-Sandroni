import React from "react";
import "@fontsource/roboto";
import "./App.css";
import Post from "./components/Post/Post";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  state = {
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?1",
        fotoPost: "https://picsum.photos/200/150?1",
      },
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?2",
        fotoPost: "https://picsum.photos/200/150?2",
      },
      {
        nomeUsuario: "marcelino",
        fotoUsuario: "https://picsum.photos/50/50?3",
        fotoPost: "https://picsum.photos/200/150?3",
      },
    ],
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

  render() {
    const listPosts = this.state.posts.map((item) => (
      <Post
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
    ));

    return (
      <div className={"app-container"}>
        <div>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.atualizarNomeUsuario}
            placeholder="Seu nome"
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.atualizarFotoUsuario}
            placeholder="Sua foto"
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.atualizarFotoPost}
            placeholder="Foto do post"
          />
        </div>
        <div> {listPosts}</div>
      </div>
    );
  }
}

export default App;
