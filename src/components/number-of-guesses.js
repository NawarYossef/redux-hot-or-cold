import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/grid.css";
import "./number-of-guesses.css";

function NumberOfGuesses(props) {
  return (
    <div>
      <p>
        <span className="guess-word">Guess #</span>
        <span className={"guess-counter"}>{props.choiceCounter}</span>
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  choiceCounter: state.choiceCounter
});

export default connect(mapStateToProps)(NumberOfGuesses);
