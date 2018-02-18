import React, { Component } from 'react';
import './result-display.css';
import {connect} from "react-redux"

function ResultDisplay(props) {
  return (
    <div>
      <h2>{props.hotOrColdMessage}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  hotOrColdMessage: state.hotOrColdMessage,
})

export default connect(mapStateToProps)(ResultDisplay)
