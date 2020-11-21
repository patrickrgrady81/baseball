import React, { Component } from 'react'

import AtBat from "./atbat/AtBat"
import Balls from "./balls/Balls"
import Strikes from "./strikes/Strikes"
import Outs from "./outs/Outs"

import "./Info.css"

class Info extends Component {
  render() {
    return (
      <div className="info-layout">
        <div className="AtBat"><AtBat /></div>
        <div className="Balls"><Balls /></div>
        <div className="Strikes"><Strikes /></div>
        <div className="Outs"><Outs /></div>
      </div>
    )
  }
}

export default Info
