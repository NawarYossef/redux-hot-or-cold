import React, { Component } from 'react';
import './app.css';
import Description from './description';
import Game from './game';
import {connect} from "react-redux"
import { showGameMessage, hideGameMessage } from '../action';


function App(props) {

    if (props.gameDescription === 'hide') {
      return (
        <div>
          <header>
            <button onClick={props.showGameMessage}>+What</button>
          </header>
          <Game />
        </div>
      )
    }
    return (
      <Description/>
    )

  
}

const mapDispatchToProps = dispatch => ({
  showGameMessage: () => dispatch(showGameMessage()),
  hideGameMessage: () => dispatch(hideGameMessage())
})

 const mapStateToProps = state => ({
  gameDescription: state.gameDescription
})

export default connect(mapStateToProps, mapDispatchToProps)(App)