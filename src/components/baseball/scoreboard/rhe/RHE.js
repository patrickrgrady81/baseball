import React, { Component } from 'react'

import "./RHE.css"

import { connect } from "react-redux"
import { addAwayRun } from "../../../../redux/Actions"

class RHE extends Component {



  render() {
    return (
      <div className="rhe-layout">
        <div className="r-layout">
          <div className="rhe-label">R</div>
          <div className="rhe-away">{this.props.aRuns}</div>
          <div className="rhe-home">{0}</div>
        </div>

        <div className="h-layout">
          <div className="rhe-label">H</div>
          <div className="rhe-away">{0}</div>
          <div className="rhe-home">{0}</div>
        </div>
        
        <div className="e-layout">
          <div className="rhe-label">E</div>
          <div className="rhe-away">{0}</div>
          <div className="rhe-home">{0}</div>
        </div>
        <button onClick={this.props.addAwayRun}>Add</button>
      </div>
    )
  }
}


const mapStateToProps = state => { 
  return {
    aRuns: state.aRuns
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    addAwayRun: () => dispatch(addAwayRun()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RHE)
