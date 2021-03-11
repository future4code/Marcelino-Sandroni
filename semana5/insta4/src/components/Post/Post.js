import React, { Component } from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

//my styles
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";

class Post extends Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    favorito: false,
    numeroFavorito: 0,
    comentando: false,
    numeroComentarios: 0,
    currentComment: "",
    comments: [],
    post: {
      nomeUsuario: this.props.nomeUsuario,
      fotoUsuario: this.props.fotoUsuario,
      fotoPost: this.props.fotoPost,
    },
  };

  likeHandler = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.curtido ? 0 : 1,
    });
  };

  bookmarkHandler = () => {
    this.setState({
      favorito: !this.state.favorito,
      numeroFavorito: this.state.numeroFavorito + 1,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario
          aoEnviar={this.aoEnviarComentario}
          comment={this.currentComment}
        />
      );
    }

    return (
      <div className="post-container">
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.state.post.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.state.post.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.state.post.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.likeHandler}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={BookmarkBorderIcon}
            onClickIcone={this.bookmarkHandler}
            valorContador={this.state.numeroFavorito}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {componenteComentario}
      </div>
    );
  }
}

export default Post;
