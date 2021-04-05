import React from "react";
import "@fontsource/roboto";
import "./App.css";
import Post from "./components/Post/Post";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  render() {
    return (
      <div className={"app-container"}>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={"marcelino"}
          fotoUsuario={"https://picsum.photos/50/50?a=1"}
          fotoPost={"https://picsum.photos/200/150?1"}
        />
        <Post
          nomeUsuario={"aline"}
          fotoUsuario={"https://picsum.photos/50/50?a=2"}
          fotoPost={"https://picsum.photos/200/150?2"}
        />
      </div>
    );
  }
}

export default App;
