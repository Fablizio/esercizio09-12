import React from "react";
import './index.css';

const Size = ({ small, medium, large }) => (
    <div className="size-div">
        <label className="size__product">Size</label>
        <div className="size__product__select">
            <div className="size__small">{small}</div>
            <div className="size__medium">{medium}</div>
            <div className="size__large">{large}</div>
        </div>
    </div>
)

export default Size