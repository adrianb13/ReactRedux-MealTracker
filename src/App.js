import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import "./App.css";
import history from "./history/history";
import Home from "./components/Home";
import AddForm from "./components/Forms/Add";
import UpdateDelete from "./components/Forms/UpdateDelete";

class App extends React.Component {
  render(){
    return (  
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddForm} />
            <Route exact path="/add/:trackerId/meal" component = {AddForm} />
            <Route exact path="/add/:trackerId/:mealId/food" component = {AddForm} />
            <Route exact path="/update/:trackerId" component = {UpdateDelete} />
            <Route exact path="/update/:trackerId/:mealId" component = {UpdateDelete} />
            <Route exact path="/update/:trackerId/:mealId/:foodId" component = {UpdateDelete} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
