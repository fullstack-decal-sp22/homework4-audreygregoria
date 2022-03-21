import React from "react";
import './styles/Square.css';

function Square(props) {
    return (
        <button className="square" onClick={props.Onclick}>
            {props.value}
        </button>
    )
}

export default Square;