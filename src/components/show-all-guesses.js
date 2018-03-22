import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/grid.css";
import "./show-all-guesses.css";

function ShowAllGuesses(props) {
  const userChoices = props.userChoices.map(choice => {
    return <span className="current-guess">{choice + " "}</span>;
  });
  return (
    <div>
      <p className="guesses">
        {userChoices}
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  userChoices: state.userChoices
});

export default connect(mapStateToProps)(ShowAllGuesses);
