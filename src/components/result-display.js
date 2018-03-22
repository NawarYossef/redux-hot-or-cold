import React, { Component } from "react";
import "./result-display.css";
import { connect } from "react-redux";

import "./styles/grid.css";
import "./result-display.css";

function ResultDisplay(props) {
  return (
    <div>
      <h2>{props.hotOrColdMessage}</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  hotOrColdMessage: state.hotOrColdMessage
});

export default connect(mapStateToProps)(ResultDisplay);
