import React from 'react';

function CardDeck(props) {
    return (
        <div className="card-group">{props.children}</div>
    )
}

export default CardDeck;