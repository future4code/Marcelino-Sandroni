import React from "react";

export function IconeComContador(props) {
  let icon;

  if (typeof props.icone === "string") {
    //icone eh uma url
    icon = <img alt="Icone" src={props.icone} onClick={props.onClickIcone} />;
  } else {
    //icone eh um elemento
    icon = (
      <span onClick={props.onClickIcone}>
        <props.icone />
      </span>
    );
  }

  return (
    <div className={"icon-container"}>
      {icon}
      <p>{props.valorContador}</p>
    </div>
  );
}
