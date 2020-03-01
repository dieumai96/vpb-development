import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/styles/_app.scss';
require('slick-carousel/slick/slick.js');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
const loading = () => (
  <p>Loading...</p>
)
const DefaultLayout = Loadable({
  loader: () => import('./views/DefaultLayout/DefaultLayout'),
  loading
});

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
