import React, { Component } from "react";
import { connect } from "react-redux";

function NumberOfGuesses(props) {
  return (
    <div>
      <p>Guess: #{props.userChoices}!</p>
    </div>
  );
}

const mapStateToProps = state => ({
  userChoices: state.userChoices
});

export default connect(mapStateToProps)(NumberOfGuesses);
