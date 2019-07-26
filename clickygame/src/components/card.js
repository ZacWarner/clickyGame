import React from 'react';

function Card(props) {
    return (
        <div className="card bg-dark">
            <img src={props.image} alt={props.name} className="card-img" />
        </div>
    )
}

export default Card;