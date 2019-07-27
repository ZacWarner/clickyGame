import React from "react";


function Nav(props) {
    return (
        <nav className="navbar fixed-top navbar-light bg-light p-0 ">

            <ul className="list-group list-group-horizontal flex-fill text-center">
                <li className="list-group-item flex-fill">
                    <h2>Zac's Clicky Game</h2>
                </li>
                <li className="list-group-item flex-fill">
                    <h4>{!props.guess ? "" : props.guess === "true" ? "Incorrect Guess!" : "Correct guess!"}</h4>
                </li>
                <li className="list-group-item flex-fill">
                    <h3>
                        HighScore: {props.highScore} | Score: {props.score}
                    </h3>
                </li>
            </ul>


        </nav >
    )
}

export default Nav;