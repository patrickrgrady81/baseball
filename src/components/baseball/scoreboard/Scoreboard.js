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
        <div className="border TeamNames"><TeamNames /></div>
        <div className="border Innings"><Innings /></div>
        <div className="border RHE"><RHE /></div>
        <div className="border Info"><Info /></div>
      </div>
    )
  }
}

export default Scoreboard
