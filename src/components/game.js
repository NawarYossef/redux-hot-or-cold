import React, { Component } from "react";
import ResultDisplay from "./result-display";
// import UserInput from './user-input'
import GuessButton from "./guess-button";
import NumberOfGuesses from "./number-of-guesses";
import ShowAllGuesses from "./show-all-guesses";
import RestartGame from "./restart-game";
import { connect } from "react-redux";
import { showGameMessage, hideGameMessage, analyzeChoice } from "../action";

import "./styles/grid.css";
import "./game.css";

export class Game extends React.Component {
  submitChoice(e) {
    e.preventDefault();
    const userInput = this.textInput.value;
    if (this.UserIsValid(userInput)) {
      console.log(userInput);
      this.props.analyzeChoice(userInput);
    }

    // reset input value
    this.refs.form.reset();
  }

  UserIsValid(userInput) {
    if (isNaN(userInput)) {
      alert("Invalid Input. Please Enter a number");
      return false;
    } else if (userInput === "") {
      alert("Please Choose A Number");
      return false;
    } else if (this.props.userChoices.includes(userInput)) {
      alert("You already guessed that number");
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitChoice(e)} ref="form">
          <h1>HOT or COLD</h1>
          <section className="game-wrapper col-4">
            <ResultDisplay />
            <input
              ref={input => (this.textInput = input)}
              placeholder={"Enter Your Guess"}
              require={"true"}
            />
            <GuessButton />
            <NumberOfGuesses />
            <ShowAllGuesses />
          </section>
          <div className={"credits"}>
          <p>
            <span className={"made-with-text"}>Made with</span>
            <i className="fa fa-heart fa created-by-icon" aria-hidden="true" /> By Nawar
          </p>
        </div>
        </form>
        <RestartGame />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  analyzeChoice: input => dispatch(analyzeChoice(input))
});

const mapStateToProps = state => ({
  hotOrColdMessage: state.hotOrColdMessage,
  userChoices: state.userChoices
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
