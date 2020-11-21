import React, { Component } from 'react'

import "./RHE.css"

class RHE extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      aRuns: 0,
      hRuns: 0,
      aHits: 0,
      hHits: 0,
      aErrors: 0,
      hErrors: 0
    }
  }
  

  render() {
    return (
      <div className="rhe-layout">
      <div className="r-layout">
        <div className="rhe-label">R</div>
        <div className="rhe-away">{this.state.aRuns}</div>
        <div className="rhe-home">{this.state.hRuns}</div>
      </div>

      <div className="h-layout">
        <div className="rhe-label">H</div>
        <div className="rhe-away">{this.state.aHits}</div>
        <div className="rhe-home">{this.state.hHits}</div>
      </div>
      
      <div className="e-layout">
        <div className="rhe-label">E</div>
        <div className="rhe-away">{this.state.aErrors}</div>
        <div className="rhe-home">{this.state.hErrors}</div>
        </div>
        </div>
    )
  }
}

export default RHE
