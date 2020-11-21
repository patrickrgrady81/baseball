import React, { Component } from 'react'

import Inning from "./inning/Inning"

import "./Innings.css"

class Innings extends Component {
  render() {

    
    return (
      <div className="innings-layout">
        <Inning in="1" />
        <Inning in="2" />
        <Inning in="3" />
        <Inning in="4" />
        <Inning in="5" />
        <Inning in="6" />
        <Inning in="7" />
        <Inning in="8" />
        <Inning in="9" />
        <Inning in="10" />
      </div>
    )
  }
}

export default Innings
