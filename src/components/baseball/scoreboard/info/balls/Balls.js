import React, { Component } from 'react'

class Balls extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       balls: 0
    }
  }
  

  render() {
    return (
      <div>
        BALLS: {this.state.balls}
      </div>
    )
  }
}

export default Balls
