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
  if (Number(userInput) + 10 === state.computerChoice) {
    return "Kinda Hot";
  } else if (Number(userInput) === state.computerChoice) {
    return "Hot";
  } else if (Number(userInput) !== state.computerChoice) {
    return "Cold";
  }
};

export default function reducer(state = initialState, action) {
  console.log(state.computerChoice);
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
