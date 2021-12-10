import React from "react";
import './index.css';

const Image = ({ image }) => (
    <div className="div__img__card">
        <img className="image__card" src={image} alt="imgCard" />
    </div>
)

export default Image