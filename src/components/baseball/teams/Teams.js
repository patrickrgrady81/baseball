import React, { Component } from 'react'

import Lineup from "./lineup/Lineup"

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
