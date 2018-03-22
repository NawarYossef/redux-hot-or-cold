import React, { Component } from "react";
import "./description.css";
import { connect } from "react-redux";
import { showGameMessage, hideGameMessage } from "../action";

import "./styles/grid.css"
import "./description.css"

function Description(props) {
  const rules = [
    "I pick a random secret number between 1 to 100 and keep it hidden.",
    "You need to guess until you can find the hidden secret number.",
    'You will get feedback on how close ("hot") or far ("cold") your guess is.'
  ];
  return (
    <div>
      <h1>What do I do?</h1>
      <p>
        This is a Hot or Cold Number Guessing Game. It goes like this:
      </p>
      <br />
      <ol>{rules.map(li => <li>{li}</li>)}</ol>
      <p>So, Are you ready?</p>
      <button className="hide-message" onClick={props.hideGameMessage}>Got It!</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  hideGameMessage: () => dispatch(hideGameMessage())
});

const mapStateToProps = state => ({
  gameDescription: state.gameDescription
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
