import React from 'react';
import { GetContributors } from './Components/GetContributors'
import {Home} from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/contributors' component={GetContributors} />
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>

  );
};

export default App;
