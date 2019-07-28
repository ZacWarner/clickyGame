import React from 'react';

function Container(props) {
    return (
        <div className="container mb-4 bg-info pb-3">{props.children}</div>
    )
}

export default Container;