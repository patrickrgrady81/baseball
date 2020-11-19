import React, { Component } from 'react'

import "./Details.css"

class Details extends Component {
  render() {
    return (
      <div className="details">
        <h3>Game Details</h3>
        <p className="details-info">Location:</p>
        <p className="details-info">Time:</p>
        <p className="details-info">Weather:</p>
      </div>
    )
  }
}

export default Details
