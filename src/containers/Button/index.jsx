import React from "react";
import './index.css';

const ButtonCart = ({ btnCart }) => (
    <div className="buttonCart-div">
        <button className="btnCart" value={btnCart} />
    </div>
)

export default ButtonCart

