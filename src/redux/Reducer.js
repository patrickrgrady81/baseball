import * as Action from "./Actions"

const initalState = {
  aRuns: 0,
  hRuns: 0
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
        hScore: state.hScore++
      }
    default: 
      return state
  } 
}

export default baseballReducer