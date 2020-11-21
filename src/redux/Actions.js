export const ADD_AWAY_RUN = "ADD_AWAY_RUN"
export const ADD_HOME_RUN = "ADD_HOME_RUN"
export const ADD_STRIKE = "ADD_STRIKE"
export const ADD_BALL = "ADD_BALL"
export const RESET_BALLS = "RESET_BALLS"
export const RESET_STRIKES = "RESET_STRIKES"
export const ADD_OUT = "ADD_OUT"
export const RESET_OUTS = "RESET_OUTS"


export const addAwayRun = () => { 
  return {
    type: ADD_AWAY_RUN
  }
}

export const addHomeRun = () => { 
  return {
    type: ADD_HOME_RUN
  }
}

export const addBall = () => { 
  return {
    type: ADD_BALL
  }
}

export const addStrike = () => { 
  return {
    type: ADD_STRIKE
  }
}

export const addOut = () => { 
  return {
    type: ADD_OUT
  }
}

export const resetBalls = () => { 
  return {
    type: RESET_BALLS
  }
}

export const resetStrikes = () => { 
  return {
    type: RESET_STRIKES
  }
}

export const resetOuts = () => { 
  return {
    type: RESET_OUTS
  }
}