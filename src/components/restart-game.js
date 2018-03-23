import React, { Component } from "react";
import { connect } from "react-redux";
import { restartGame } from "../action";

import "./styles/grid.css"
import "./styles/restart-game.css";

function RestartGame(props) {
  return (
    <div>
      <p className="restart" onClick={props.restartGame}>+New Game!</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame())
});

const mapStateToProps = state => ({
  hotOrColdMessage: state.hotOrColdMessage,
  userChoices: state.userChoices
});

export default connect(mapStateToProps, mapDispatchToProps)(RestartGame);
