import React, { Component } from "react";
import { connect } from "react-redux";

function ShowAllGuesses(props) {
  const userChoices = props.userChoices.map(choice => choice + " ");
  return (
    <div>
      <p>{userChoices}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  userChoices: state.userChoices
});

export default connect(mapStateToProps)(ShowAllGuesses);
