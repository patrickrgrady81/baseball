import React, { Component } from 'react'

import { connect } from "react-redux"

class Balls extends Component {

  render() {
    return (
      <div>
        BALLS: {this.props.balls}
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {
    balls: state.balls
  }
}

export default connect(mapStateToProps)(Balls)
