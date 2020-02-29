import React from 'react';
import Index from './views/Index';

const CardService = React.lazy(() => import('./components/CardService/CardService'));
const Menu = React.lazy(() => import('./components/Menu/Menu'));


const routes = [
  { path: '/', exact: true, name: 'Index', component: Index },
  { path: '/menu', exact: true, name: 'Menu', component: Menu },
  { path: '/card-service', exact: true, name: 'CardService', component: CardService },
]
export default routes;