import * as Action from "./BaseballActions"

const initalState = {
  aScore: 0,
  hScore: 0
}

const baseballReducer = (state = initalState, action) => { 
  switch (action.type) { 
    case Action.ADD_AWAY_RUN:
      return {
        ...aScore, 
        aScore: state.aScore++
      }
    case Action.HOME_AWAY_RUN:
      return {
        ...hScore, 
        hScore: state.hScore++
      }
    default: 
      return state
  } 
}

export default baseballReducer