import React, { Component } from 'react'

import Scoreboard from "./scoreboard/Scoreboard"
import Details from "./details/Details"
import Teams from "./teams/Teams"
import PlayByPlay from "./playbyplay/PlayByPlay"
import Stats from "./stats/Stats"
import Main from "./main/Main"

import "./Baseball.css"


export class Baseball extends Component {
  render() {
    return (
      <div className="baseball-layout">
        <div className="border Scoreboard"><Scoreboard/></div>
        <div className="border Details"><Details/></div>
        <div className="border Teams"><Teams/></div>
        <div className="border Main"><Main/></div>
        <div className="border PlayByPlay"><PlayByPlay/></div>
        <div className="border Stats"><Stats/></div>
        {/* Reserved space for possible future use className="Reserved"*/}
      </div>
    )
  }
}

export default Baseball
