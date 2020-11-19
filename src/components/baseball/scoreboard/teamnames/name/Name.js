import React, { Component } from 'react'

import "./Name.css"
class Name extends Component {
  render() {
    return (
      <div className="name">{this.props.type}</div>
    )
  }
}

export default Name
