import React, { Component, Fragment, Suspense } from 'react'
import Header from '../../components/Header/Header';
import routers from '../../routers';
import { Switch, Route, Redirect } from 'react-router-dom';
class DefaultLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routers.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/" to="/menu" />
          </Switch>
        </Suspense>
      </Fragment>
    )
  }
}
export default DefaultLayout;
