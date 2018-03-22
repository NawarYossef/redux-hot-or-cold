import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/grid.css";
import "./number-of-guesses.css";

function NumberOfGuesses(props) {
  return (
    <div>
      <p><span className="guess-word">Guess #</span>{props.userChoices}!</p>
    </div>
  );
}

const mapStateToProps = state => ({
  userChoices: state.userChoices
});

export default connect(mapStateToProps)(NumberOfGuesses);
