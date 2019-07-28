import React from "react";


function Nav(props) {
    return (
        <nav className="navbar fixed-top navbar-light text-white p-0 ">

            <ul className="list-group list-group-horizontal bg-info flex-fill text-center">
                <li className="list-group-item bg-info flex-fill">
                    <h2>Zac's Clicky Game</h2>
                </li>
                <li className="list-group-item bg-info flex-fill">
                    <h4>{!props.guess ? "" : props.guess === "true" ? "Incorrect Guess!" : "Correct guess!"}</h4>
                </li>
                <li className="list-group-item bg-info flex-fill">
                    <h3>
                        HighScore: {props.highScore} | Score: {props.score}
                    </h3>
                </li>
            </ul>


        </nav >
    )
}

export default Nav;