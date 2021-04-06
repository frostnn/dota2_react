import './App.scss';
import Header from '../components/Header';
import React from 'react';
import Heroes from '../components/Heroes/Heroes';
import { Route, Switch } from 'react-router';
import Leagues from '../components/Leagues';
import Items from '../components/Items';
import Matches from '../components/Matches/Matches';
import Players from '../components/Players';
import Teams from '../components/Teams';
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/leagues" component={Leagues} exact />
        <Route path="/heroes" component={Heroes} />
        <Route path="/items" component={Items} />
        <Route path="/matches" component={Matches} />
        <Route path="/players" component={Players} />
        <Route path="/teams" component={Teams} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
