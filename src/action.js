export const SHOW_GAME_MESSAGE =  "SHOW_GAME_MESSAGE"
export const showGameMessage  = () => ({
  type: SHOW_GAME_MESSAGE 
})

export const HIDE_GAME_MESSAGE  =  "HIDE_GAME_MESSAGE"
export const hideGameMessage  = () => ({
  type: HIDE_GAME_MESSAGE 
})

export const ANALYZE_CHOICE  =  "ANALYZE_CHOICE"
export const analyzeChoice  = (userInput) => ({
  type: ANALYZE_CHOICE ,
  userInput
})

export const RESTART_GAME  =  "RESTART_GAME"
export const restartGame  = () => ({
  type: RESTART_GAME
})

