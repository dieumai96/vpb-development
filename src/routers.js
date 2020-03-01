import React from 'react';
import DefaultLayout from './views/DefaultLayout/DefaultLayout';

const Menu = React.lazy(() => import('./components/Menu/Menu'));


const routes = [
  { path: '/', exact: true, name: 'DefaultLayout', component: DefaultLayout },
  { path: '/menu', exact: true, name: 'Menu', component: Menu },
]
export default routes;