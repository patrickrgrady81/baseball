import React, { Component } from 'react'

import "./Inning.css"

class Inning extends Component {
  render() {
    return (
      <div>
        <div className="inning-label">{this.props.in}</div>
        <div className="runs">{this.props.aScores[this.props.in -1]}</div>
        <div className="runs">{this.props.hScores[this.props.in -1]}</div>
      </div>
    )
  }
}

export default Inning
