import React, { Component } from 'react';
import {connect} from "react-redux"
import { restartGame } from '../action';

function RestartGame(props) {
  return (
    <div>
      <button onClick={props.restartGame}>+New Game!</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame())
})

const mapStateToProps = state => ({
  hotOrColdMessage: state.hotOrColdMessage,
  userChoices: state.userChoices
})

export default connect(mapStateToProps, mapDispatchToProps)(RestartGame)
