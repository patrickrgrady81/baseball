import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from "./components/nav/Nav"
import Home from "./components/pages/Home"
import Baseball from "./components/baseball/Baseball"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/score" component={Baseball} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
