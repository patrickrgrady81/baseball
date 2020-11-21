import React, { Component } from 'react'

class Strikes extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      strikes: 0
    }
  }
  

  render() {
    return (
      <div>
        STRIKES: {this.state.strikes}
      </div>
    )
  }
}

export default Strikes
