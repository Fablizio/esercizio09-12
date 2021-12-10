import React from "react";
import './index.css';

const ButtonCart = ({ btnCart }) => (
    <div className="buttonCart-div">
        <button className="btnCart">{btnCart}</button>
    </div>
)

export default ButtonCart