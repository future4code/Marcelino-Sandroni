import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const ContainerComentarios = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  > * {
    width: 100%;
  }
`;

export class SecaoComentario extends Component {
  state = {
    comentarios: this.props.comentarios,
    comentarioAtual: "",
  };

  onChangeComentario = (event) => {
    this.setState({ comentarioAtual: event.target.value });
    //console.log(event.target.value);
  };

  aoEnviarParaPai = (event) => {
    this.props.aoEnviar(this.state.comentarioAtual, this.props.index);
    this.setState({ comentarioAtual: "" });
  };

  isEnter = (event) => {
    if (event.key === "Enter") {
      this.aoEnviarParaPai();
    }
  };

  render() {
    const comentarios = this.state.comentarios.map((comentario, index) => (
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>{comentario[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Comentario"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Comentario {index}
                </Typography>
                {comentario}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    ));
    return (
      <ContainerComentarios>
        {comentarios}
        <TextField
          label="Escreve seu comentario"
          className={"input-comentario"}
          placeholder={"Comentário"}
          value={this.state.comentarioAtual}
          onChange={this.onChangeComentario}
          onKeyDown={this.isEnter}
        />
        <Button
          variant="contained"
          color="default"
          onClick={this.aoEnviarParaPai}
        >
          <AddIcon></AddIcon>
          Comentar
        </Button>
      </ContainerComentarios>
    );
  }
}
