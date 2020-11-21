import React, { Component } from 'react'

import { connect } from "react-redux"

class Outs extends Component {

  render() {
    return (
      <div>
        OUTS: {this.props.outs}
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {
    outs: state.outs
  }
}

export default connect(mapStateToProps)(Outs)
