import {
  SHOW_GAME_MESSAGE,
  HIDE_GAME_MESSAGE,
  ANALYZE_CHOICE,
  RESTART_GAME
} from "./action";

const initialState = {
  gameDescription: "hide",
  userInput: 0,
  userChoices: [],
  choiceCounter: 0,
  hotOrColdMessage: "Make your Guess!",
  computerChoice: Math.floor(Math.random() * (100 - 1 + 1)) + 1
};

const showResultsMessage = (userInput, state) => {
  const guess = Math.abs(initialState.computerChoice - Number(userInput));

  if (guess >= 50) {
    return  "You're Ice Cold...";
  } else if (guess >= 30) {
    return "You're Cold...";
  } else if (guess >= 10) {
    return  "You're Warm.";
  } else if (guess >= 1) {
    return "You're Hot!";
  } else {
    return "You Got It!";
  }
};



export default function reducer(state = initialState, action) {
  if (action.type === "SHOW_GAME_MESSAGE") {
    return Object.assign({}, state, {
      gameDescription: "show"
    });
  } else if (action.type === "HIDE_GAME_MESSAGE") {
    return Object.assign({}, state, {
      gameDescription: "hide"
    });
  } else if (action.type === "ANALYZE_CHOICE") {
    return Object.assign({}, state, {
      userChoices: state.userChoices.concat(action.userInput),
      choiceCounter: state.choiceCounter + 1,
      hotOrColdMessage: showResultsMessage(
        action.userInput,
        (state = initialState)
      )
    });
  } else if (action.type === "RESTART_GAME") {
    return Object.assign({}, state, {
      gameDescription: "hide",
      userInput: 0,
      userChoices: [],
      choiceCounter: 0,
      hotOrColdMessage: "Make your Guess!",
      computerChoice: Math.floor(Math.random() * (100 - 1 + 1)) + 1
    });
  }

  return state;
}
