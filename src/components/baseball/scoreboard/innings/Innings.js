import React, { Component } from 'react'

import Inning from "./inning/Inning"

import "./Innings.css"

class Innings extends Component {
  render() {
    let aScores = ["", "", "", "", "", "", "", "", "", ""];
    let hScores = ["", "", "", "", "", "", "", "", "", ""];
    
    return (
      <div className="innings-layout">
        <Inning in="1" aScores={aScores} hScores={hScores}  />
        <Inning in="2" aScores={aScores} hScores={hScores}  />
        <Inning in="3" aScores={aScores} hScores={hScores}  />
        <Inning in="4" aScores={aScores} hScores={hScores}  />
        <Inning in="5" aScores={aScores} hScores={hScores}  />
        <Inning in="6" aScores={aScores} hScores={hScores}  />
        <Inning in="7" aScores={aScores} hScores={hScores}  />
        <Inning in="8" aScores={aScores} hScores={hScores}  />
        <Inning in="9" aScores={aScores} hScores={hScores}  />
        <Inning in="10" aScores={aScores} hScores={hScores}  />
      </div>
    )
  }
}

export default Innings
