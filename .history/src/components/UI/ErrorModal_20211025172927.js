import React from "react";
import './ErrorModal.css'
import { Card } from "./Card";
import { Button } from "../UI/Button";

export const ErrorModal = (props) => {
  return <Card className="modal">
    <header className="header">
        <h2>{props.title}</h2>
    </header>
    <div className="content">
        <p>{props.message}</p>
    </div>
    <footer className="actions">
        <Button>Okay</Button>
    </footer>
  </Card>;
};
