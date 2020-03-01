import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import './assets/styles/_app.scss';
const loading = () => (
  <p>Loading...</p>
)
const DefaultLayout = Loadable({
  loader: () => import('./views/DefaultLayout'),
  loading
});

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
