import React, { Component } from "react";
import { connect } from "react-redux";
import { showGameMessage, hideGameMessage } from "../action";

import "./styles/grid.css"
import "./styles/description.css"

function Description(props) {
  const rules = [
    "I pick a random secret number between 1 to 100 and keep it hidden.",
    "You need to guess until you can find the hidden secret number.",
    'You will get feedback on how close ("hot") or far ("cold") your guess is.'
  ];
  return (
    <div className={"description "}>
      <h1 className={"describe-header"}>What do I do?</h1>
      <p className={"header-text"}>
        This is a Hot or Cold Number Guessing Game. It goes like this:
      </p>
      <br />
      <ul>{rules.map(li => <li>{li}</li>)}</ul>
      <p className={"ready-question-text"}>So, Are you ready?</p>
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
