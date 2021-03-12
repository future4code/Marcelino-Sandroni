import React, { Component } from "react";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

// big styles
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const PostContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  border: 1px solid #333;
  box-shadow: 2px 2px 3px #333;
  border-radius: 1rem;

  > * {
    flex-basis: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const UserPhoto = styled(Avatar)`
  width: 10%;
  height: 10%;
`;

const UsersGroup = styled(Avatar)`
  //flex-basis: 10%;
  //height: 100%;
  flex-grow: 1;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  > * {
    flex-grow: 1;
  }
`;

const UserText = styled(Typography)`
  font-style: italic;
  text-transform: capitalize;
`;

class Post extends Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    favorito: false,
    numeroFavorito: 0,
    comentando: false,
    //numeroComentarios: 0,
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

  render() {
    //console.log(`post1: ${this.state.post.comentarios[0]}`);
    //console.log(`post2: ${this.state.post.comentarios[1]}`);
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
          aoEnviar={this.props.aoEnviarComentario}
          comentarios={this.props.comentarios}
          index={this.props.index}
        />
      );
    }

    let UsersGroupComment = this.props.comentarios.map((item) => (
      <Avatar>{item[0]}</Avatar>
    ));
    if (!this.props.comentarios.length) {
      UsersGroupComment = <p>Seja o primeiro a comentar!</p>;
    }

    return (
      <PostContainer>
        <div className={"post-header"}>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <UserText variant="h4">{this.props.nomeUsuario}</UserText>
        </div>

        <Image
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <PostFooter>
          {" "}
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
            valorContador={this.props.comentarios.length}
          />
          <UsersGroup max={1}>{UsersGroupComment}</UsersGroup>
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
