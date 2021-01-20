import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Landing/home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={(props) => (<Home/>)}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
