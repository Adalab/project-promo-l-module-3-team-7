import '../style/App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import CardGenerator from './CardGenerator';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/card-generator' component={CardGenerator} />
    </Switch>
  );
}

export default App;
