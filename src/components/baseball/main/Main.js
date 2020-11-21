import React, { Component } from 'react'

import { connect } from "react-redux"

import { addBall, addStrike, addOut, resetBalls, resetStrikes, resetOuts } from "../../../redux/Actions"

class Main extends Component {
  ball = () => { 
    if (this.props.balls === 3) {
      this.props.resetBalls()
    } else { 
      this.props.addBall()
    }
  }
  
  strike = () => { 
    if (this.props.strikes === 2) {
      this.props.addOut()
      this.props.resetStrikes()
    } else { 
      this.props.addStrike()
    }
  }

  render() {
    return (
      <div>
        <button onClick={ this.ball }>Ball</button>
        <button onClick={ this.strike }>Strike</button>
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {
    balls: state.balls,
    strikes: state.strikes,
    outs: state.outs
  }
 }

const mapDispatchToProps = dispatch => { 
  return {
    addBall: () => dispatch(addBall()),
    addStrike: () => dispatch(addStrike()),
    addOut: () => dispatch(addOut()),
    resetBalls: () => dispatch(resetBalls()),
    resetStrikes: () => dispatch(resetStrikes()),
    resetOuts: () => dispatch(resetOuts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
