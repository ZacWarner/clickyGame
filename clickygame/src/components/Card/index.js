import React from 'react';
import "./style.css";

function Card(props) {
    return (
        <div className="card bg-dark">
            <img src={props.image} alt={props.name} clicked={props.clicked} className="card-img" />
        </div>
    )
}

export default Card;