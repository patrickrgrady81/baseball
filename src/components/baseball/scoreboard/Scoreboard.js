import React, { Component } from 'react'

import TeamNames from "./teamnames/TeamNames"
import Innings from "./innings/Innings"
import RHE from "./rhe/RHE"
import Info from "./info/Info"

import "./Scoreboard.css"

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard-layout">
        <div className="TeamNames"><TeamNames /></div>
        <div className="Innings"><Innings /></div>
        <div className="RHE"><RHE /></div>
        <div className="Info"><Info /></div>
      </div>
    )
  }
}

export default Scoreboard
