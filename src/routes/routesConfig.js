import Leagues from '../components/Leagues';
import Items from '../components/Items';
import Matches from '../components/Matches';
import Players from '../components/Players';
import Teams from '../components/Teams';
import Heroes from '../components/Heroes';
import Live from '../components/Live';
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
];

export default routesConfig;
