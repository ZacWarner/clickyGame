import React, { Component } from "react";
import Container from '../container';
import Jumbo from "../jumbo";
import Card from "../Card";
import CardDeck from "../CardDeck";
import characters from "../../characters.json";



class Main extends Component {
    state = {
        rowOne: [],
        rowTwo: [],
        rowThree: [],
        name: "",
        clicked: "",
    };

    componentDidMount() {
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
        this.createRow();
    }

    render() {
        return (
            <>
                <Jumbo />
                <Container>
                    <CardDeck>
                        {this.state.rowOne.map((character, val) =>
                            <Card image={character.image} name={character.name} key={character.name} clicked={this.state.clicked} />)}
                    </CardDeck>
                    <CardDeck>
                        {this.state.rowTwo.map((character, val) =>
                            <Card onClick={this.handleImputChange} image={character.image} name={character.name} key={character.name} clicked={this.state.clicked} />)}
                    </CardDeck>
                    <CardDeck>
                        {this.state.rowThree.map((character, val) =>
                            <Card image={character.image} name={character.name} key={character.name} clicked={this.state.clicked} />)}
                    </CardDeck>
                </Container>
            </>
        );
    }
}


export default Main;