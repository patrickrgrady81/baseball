import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import Nav from "./components/nav/Nav"
import Home from "./components/pages/Home"
import Baseball from "./components/baseball/Baseball"

import store from "./redux/Store"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/score" component={Baseball} />
          </Switch>
        </div>
      </Provider>
    </Router>


  );
}

export default App;
