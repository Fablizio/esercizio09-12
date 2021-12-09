import React from "react";
import './index.css';

const TextBlock = ({ nameProduct, price, description }) => (
    <div className="text-block">
        <div className="text-block__nameProduct-price">
            <div className="text-block__name-price">
                <p className="text-block__nameProduct">{nameProduct}</p>
            </div>
            <div>
                <p className="text-block__price">{price}$</p>
            </div>
        </div>
        <p className="text-block__description">{description}</p>
    </div>
)

export default TextBlock