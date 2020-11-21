import React, { Component } from 'react'

class AtBat extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      atBat: 11
    }
  }
  

  render() {
    return (
      <div>
        AT BAT: {this.state.atBat}
      </div>
    )
  }
}

export default AtBat
