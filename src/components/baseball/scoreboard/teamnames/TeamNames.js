import React, { Component } from 'react'

import Name from "./name/Name"

class TeamNames extends Component {
  render() {
    return (
      <div>
        <Name type="Away" />
        <Name type="Home" />
      </div>
    )
  }
}

export default TeamNames
