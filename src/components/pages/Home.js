import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        <button><Link to="/score">New Game</Link></button>
      </div>
    )
  }
}

export default Home
