import React from "react";
import ReactDOM from "react"
import "./ErrorModal.css";
import { Card } from "./Card";
import { Button } from "../UI/Button";

const Backdrop = (props)=> {
  return <div className="backdrop" onClick={props.onHide} />
}

const ModalOverlay = (props)=> {
  return (
    <Card className="modal">
    <header className="header">
      <h2>{props.title}</h2>
    </header>
    <div className="content">
      <p>{props.message}</p>
    </div>
    <footer className="actions">
      <Button  onClick={props.onHide}>Okay</Button>
    </footer>
  </Card>
    )
}

export const ErrorModal = (props) => {
    
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHide}/>, document.getElementById('backdrop-root'))}
    </React.Fragment>
  );
};
