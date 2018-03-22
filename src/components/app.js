import React, { Component } from "react";
import Description from "./description";
import Game from "./game";
import { connect } from "react-redux";
import { showGameMessage, hideGameMessage } from "../action";

import "./styles/grid.css"
import "./app.css";

function App(props) {
  if (props.gameDescription === "hide") {
    return (
      <div>
        <header className="col-12">
          <p className="game-rules" onClick={props.showGameMessage}>+What</p>
        </header>
        <Game />
      </div>
    );
  }
  return <Description />;
}

const mapDispatchToProps = dispatch => ({
  showGameMessage: () => dispatch(showGameMessage()),
  hideGameMessage: () => dispatch(hideGameMessage())
});

const mapStateToProps = state => ({
  gameDescription: state.gameDescription
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
