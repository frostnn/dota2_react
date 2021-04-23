import Leagues from '../components/Leagues';
import Matches from '../components/Matches';
import Teams from '../components/Teams';
import Heroes from '../components/Heroes';
import Live from '../components/Live';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import LeaguesCardsInfo from '../components/Leagues/LeaguesCardsInfo';
import TeamsCardsInfo from '../components/Teams/TeamsCardsInfo';
import TeamsCardsPlayersInfo from '../components/Teams/TeamsCardsPlayersInfo';
const routesConfig = [
  {
    path: '/heroes',
    exact: true,
    component: Heroes,
  },
  {
    path: '/leagues',
    exact: true,
    component: Leagues,
  },

  {
    path: '/matches',
    exact: true,
    component: Matches,
  },

  {
    path: '/teams',
    exact: true,
    component: Teams,
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
  { path: '/teams/:id', exact: true, component: TeamsCardsInfo },
  { path: '/teams/players/:name', exact: true, component: TeamsCardsPlayersInfo },
  { path: '*', exact: false, component: NotFound },
];

export default routesConfig;
