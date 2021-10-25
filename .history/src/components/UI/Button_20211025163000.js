import React from 'react';
import "./Button.css"

export const Button = (props) => {
    return (
        <div className="button" type={props.type || 'button'}></div>
    )
}