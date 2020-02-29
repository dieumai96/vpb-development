import React from 'react';
import Index from './views/Index';


const CarList = React.lazy(() => import('./components/Card/CardList'));


const routes = [
  { path: '/', exact: true, name: 'Index', component: Index },
  { path: '/card-list', exact: true, name: 'CardList', component: CarList },
]
export default routes;