import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import "./App.css";
import history from "./history/history";
import Home from "./components/Home";
import AddForm from "./components/AddForm";

class App extends React.Component {
  render(){
    return (  
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tracker" component={AddForm} />
            <Route exact path="/tracker/:trackerId/meal" component = {AddForm} />
            <Route exact path="/tracker/:trackerId/meal/:mealId/food" component = {AddForm} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
