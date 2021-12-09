import React from "react";

const Image = ({ image }) => (
    <div className="div__img__card">
        <img className="image__card" src={image} alt="imgCard" width="250px" />
    </div>
)

export default Image