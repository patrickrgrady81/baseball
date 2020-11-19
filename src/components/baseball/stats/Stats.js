import React, { Component } from 'react'

import Current from "./current/Current"

class CurrentStats extends Component {
  render() {
    return (
      <div>
        <Current type="Pitcher" />
        <Current type="Batter" />
      </div>
    )
  }
}

export default CurrentStats
