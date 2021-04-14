import React, { useState } from 'react';
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from './styles';

import IconeComContador from '../IconeComContador/IconeComContador';
import SecaoComentario from '../SecaoComentario/SecaoComentario';

import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';

type Props = {
  fotoUsuario: string;
  nomeUsuario: string;
  fotoPost: string;
};

const Post: React.FC<Props> = (props) => {
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios, setComentarios] = useState<string[]>([]);

  const onClickCurtida = () => {
    if (curtido) {
      setNumeroCurtidas((prevNumeroCurtidas) => prevNumeroCurtidas - 1);
    } else {
      setNumeroCurtidas((prevNumeroCurtidas) => prevNumeroCurtidas + 1);
    }
    setCurtido(!curtido);
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const enviarComentario = (comentario: string) => {
    setNumeroComentarios(numeroComentarios + 1);
    setComentarios([...comentarios, comentario]);
  };

  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco;
  const caixaDeComentario = comentando && (
    <SecaoComentario {...{ comentarios, enviarComentario }} />
  );

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      <CommentContainer>{caixaDeComentario}</CommentContainer>
    </PostContainer>
  );
};

export default Post;
