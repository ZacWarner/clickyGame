import React, { Component } from "react";
import Container from '../container';
import Jumbo from "../Jumbo";
import Card from "../Card";
import CardDeck from "../CardDeck";
import characters from "../../characters.json";
import Nav from "../nav";



class Main extends Component {
    state = {
        rowOne: [],
        rowTwo: [],
        rowThree: [],
        clicked: [],
        guess: "",
        name: "",
        score: 0,
        highScore: 0
    };

    componentDidMount() {
        this.createRow();
    };

    resetGame = () => {
        this.setState({
            name: "",
            score: 0,
            clicked: []
        });
        this.createRow();
    };



    createRow = () => {
        characters.sort(() => {
            return 0.5 - Math.random();
        });
        let rowOneTemp = [];
        let rowTwoTemp = [];
        let rowThreeTemp = [];

        for (let i = 0; i < 4; i++) {
            rowOneTemp.push(characters[i]);
        };

        for (let i = 4; i < 8; i++) {
            rowTwoTemp.push(characters[i]);
        };

        for (let i = 8; i < 12; i++) {
            rowThreeTemp.push(characters[i]);
        };
        this.setState({ rowOne: rowOneTemp, rowTwo: rowTwoTemp, rowThree: rowThreeTemp })
    };

    handleImputChange = event => {
        console.log("clicked");
        const name = JSON.stringify(event.target.name);
        let check = false
        let newScore = this.state.score;


        const alreadyClicked = this.state.clicked;
        console.log(alreadyClicked);
        console.log(name);
        if (!alreadyClicked) {
            check = false;
        }
        else {
            for (let i = 0; i < alreadyClicked.length; i++) {
                console.log(alreadyClicked[i])
                if (alreadyClicked[i] === name) {
                    check = true;
                    console.log("check" + i);
                }

            }
        };
        console.log(check);

        if (check === true) {
            console.log("you lose");
            this.setState({ guess: "true" });
            const highScore = this.state.highScore;
            if (highScore < newScore) {
                this.setState({ highScore: newScore });
            }
            this.resetGame();
        }
        else {
            this.state.clicked.push(name);
            newScore++;
            this.setState({ score: newScore, guess: "false" });
            this.createRow();
            console.log(this.state.score);
        }

    }

    render() {
        return (
            <>
                <Nav guess={this.state.guess} score={this.state.score} highScore={this.state.highScore} />
                <Jumbo />
                <Container>
                    <CardDeck>
                        {this.state.rowOne.map((character, val) =>
                            <Card onClick={this.handleImputChange} image={character.image} name={character.name} key={character.name} />)}
                    </CardDeck>
                    <CardDeck>
                        {this.state.rowTwo.map((character, val) =>
                            <Card onClick={this.handleImputChange} image={character.image} name={character.name} key={character.name} />)}
                    </CardDeck>
                    <CardDeck>
                        {this.state.rowThree.map((character, val) =>
                            <Card onClick={this.handleImputChange} image={character.image} name={character.name} key={character.name} />)}
                    </CardDeck>
                </Container>
            </>
        );
    }
}


export default Main;