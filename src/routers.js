import React from 'react';
import DefaultLayout from './views/DefaultLayout/DefaultLayout';

const Menu = React.lazy(() => import('./components/Menu/Menu'));
const CardService = React.lazy(() => import('./components/Card/CardService/CardService'));


const routes = [
  { path: '/', exact: true, name: 'DefaultLayout', component: DefaultLayout },
  { path: '/menu', exact: true, name: 'Menu', component: Menu },
  { path: '/card-service', exact: true, name: 'CardService', component: CardService },
]
export default routes;