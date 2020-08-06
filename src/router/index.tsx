import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "../components/HomePage";

const AppRouter = () => (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    </Router>
);

export default AppRouter;
