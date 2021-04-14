import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  comentarios: string[];
  enviarComentario: (comentario: string) => void;
};

const SecaoComentario = (props: Props) => {
  const [comentario, setComentario] = useState('');

  const onChangeComentario = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComentario(event.target.value);
  };

  const enviarComentarioSeAPertarEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      props.enviarComentario(comentario);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List>
          {props.comentarios.map((item, index) => (
            <ListItem key={item + index}>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item} secondary={`User ${index}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid container justify="space-between" item xs={12}>
        <TextField
          variant="filled"
          label="comentario"
          value={comentario}
          onChange={onChangeComentario}
          onKeyDown={enviarComentarioSeAPertarEnter}
        />
        <Button
          variant="contained"
          onClick={() => {
            props.enviarComentario(comentario);
          }}
        >
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
};

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComment = styled.input`
  width: 70%;
  margin-right: 5px;
`;
export default SecaoComentario;
