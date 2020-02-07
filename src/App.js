import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import "./App.css";
import history from "./history/history";
import Home from "./components/Home";

class App extends React.Component {
  render(){
    return (  
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
      
    );
  };
};

export default App;
