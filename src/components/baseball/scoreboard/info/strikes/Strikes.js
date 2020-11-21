import React, { Component } from 'react'

import { connect } from "react-redux"

class Strikes extends Component {
  
  render() {
    return (
      <div>
        STRIKES: {this.props.strikes}
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {
    strikes: state.strikes
  }
}

export default connect(mapStateToProps)(Strikes)
