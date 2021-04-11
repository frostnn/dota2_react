import Leagues from '../components/Leagues';
import Items from '../components/Items';
import Matches from '../components/Matches';
import Players from '../components/Players';
import Teams from '../components/Teams';
import Heroes from '../components/Heroes';
import Live from '../components/Live';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import LeaguesCardsInfo from '../components/Leagues/LeaguesCardsInfo';
const routesConfig = [
  {
    path: '/leagues',
    exact: true,
    component: Leagues,
  },
  {
    path: '/items',
    exact: true,
    component: Items,
  },
  {
    path: '/matches',
    exact: true,
    component: Matches,
  },
  {
    path: '/players',
    exact: true,
    component: Players,
  },
  {
    path: '/teams',
    exact: true,
    component: Teams,
  },

  {
    path: '/heroes',
    exact: true,
    component: Heroes,
  },
  {
    path: '/live',
    exact: true,
    component: Live,
  },

  {
    path: '/',
    exact: true,
    component: Home,
  },
  { path: '/leagues/:id', exact: true, component: LeaguesCardsInfo },
  { path: '*', exact: false, component: NotFound },
];

export default routesConfig;
