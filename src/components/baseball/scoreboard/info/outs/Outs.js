import React, { Component } from 'react'

class Outs extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       outs: 0
    }
  }
  

  render() {
    return (
      <div>
        OUTS: {this.state.outs}
      </div>
    )
  }
}

export default Outs
