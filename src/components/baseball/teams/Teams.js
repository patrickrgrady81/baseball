import React, { Component } from 'react'

import Lineup from "./lineup/Lineup"

import "./Teams.css"

class Teams extends Component {
  render() {
    return (
      <div>
        <Lineup type="Home" />
        <Lineup type="Away" />
      </div>
    )
  }
}

export default Teams
