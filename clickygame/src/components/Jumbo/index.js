import React from "react";
import "./style.css";

function Jumbo() {
    return (
        <div className="jumbotron jumbotron-fluid text-center text-white">
            <h1 className="display-4 text-center m-4"> Clicky Game!</h1>
            <p className="lead">Click a picture to earn points, but don't click the same one!</p>
        </div>
    )
}

export default Jumbo;