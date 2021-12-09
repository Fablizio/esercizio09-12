import React from "react";
import './index.css';

const ColorProduct = ({ black, darkviolet, yellow, gray }) => (
    <div className="color-product">
        <label className="color__label">Colors</label>
        <div className="color-product-select">
            <div className="color__black">{black}</div>
            <div className="color__darkviolet">{darkviolet}</div>
            <div className="color__yellow">{yellow}</div>
            <div className="color__gray">{gray}</div>
        </div>
    </div>
)

export default ColorProduct