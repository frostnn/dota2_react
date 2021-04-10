import './App.scss';
import Header from '../components/Header';
import React from 'react';
import { Route, Switch } from 'react-router';
import routesConfig from '../routes/routesConfig';
import Content from '../containers/Content';
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <Switch>
          {routesConfig.map(({ path, exact, component }, i) => (
            <Route path={path} component={component} exact={exact} key={`${component}_${i}`} />
          ))}
        </Switch>
      </Content>
    </React.Fragment>
  );
};

export default App;
