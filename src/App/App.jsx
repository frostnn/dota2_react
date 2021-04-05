import './App.scss';
import Header from '../components/Header';
import React from 'react';
import Heroes from '../components/Heroes/Heroes';
import Pages1 from '../pages/pages1';
import Pages2 from '../pages/pages2';
import Pages3 from '../pages/pages3';
import { Route, Switch } from 'react-router';
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/heroes" component={Heroes} />
        <Route path="/roster1" component={Pages1} />
        <Route path="/roster2" component={Pages2} />
        <Route path="/roster3" component={Pages3} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
