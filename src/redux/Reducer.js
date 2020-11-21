import * as Action from "./Actions"

const initalState = {
  aRuns: 0,
  hRuns: 0,
  balls: 1,
  strikes: 1,
  outs: 1
}

const baseballReducer = (state = initalState, action) => { 
  switch (action.type) { 
    case Action.ADD_AWAY_RUN:
      console.log("Add Away Run")
      return {
        ...state, 
        aRuns: state.aRuns + 1
      }
    case Action.ADD_HOME_RUN:
      return {
        ...state, 
        hScore: state.hScore + 1
      }
    case Action.ADD_BALL:
      console.log("Adding Ball")
      return {
        ...state, 
        balls: state.balls + 1
      }
    case Action.RESET_BALLS:
      return {
        ...state, 
        balls: 0
      }
    case Action.ADD_STRIKE:
      console.log("Adding Strike")
      return {
        ...state, 
        strikes: state.strikes + 1
      }
    case Action.RESET_STRIKES:
      return {
        ...state, 
        strikes: 0
      }
    case Action.ADD_OUT:
      return {
        ...state, 
        outs: state.outs + 1
      }
    case Action.RESET_OUTS:
      return {
        ...state, 
        outs: 0
      }
    default: 
      return state
  } 
}

export default baseballReducer