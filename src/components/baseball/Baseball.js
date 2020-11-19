import React, { Component } from 'react'

import Scoreboard from "./scoreboard/Scoreboard"
import Details from "./details/Details"
import Teams from "./teams/Teams"
import PlayByPlay from "./playbyplay/PlayByPlay"
import Stats from "./stats/Stats"
import Main from "./main/Main"


export class Baseball extends Component {
  render() {
    return (
      <div>
        <Scoreboard />
        <Details />
        <Teams />
        <Main />
        <PlayByPlay />
        <Stats />
      </div>
    )
  }
}

export default Baseball
