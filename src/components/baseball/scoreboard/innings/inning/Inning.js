import React, { Component } from 'react'

import "./Inning.css"

class Inning extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      aScores: [],
      hScores: []
    }
  }
  

  render() {
    return (
      <div>
        <div className="inning-label">{this.props.in}</div>
        <div className="runs">{this.state.aScores[this.props.in -1] || 0}</div>
        <div className="runs">{this.state.hScores[this.props.in -1] || 0}</div>
      </div>
    )
  }
}

export default Inning
