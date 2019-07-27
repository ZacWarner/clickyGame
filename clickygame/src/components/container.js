import React from 'react';

function Container(props) {
    return (
        <div className="container mb-4">{props.children}</div>
    )
}

export default Container;