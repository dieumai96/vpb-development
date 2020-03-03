import React, { Component, Fragment, Suspense } from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import routers from '../../routers';
import { Switch, Route, Redirect } from 'react-router-dom';
class DefaultLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
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
        <Footer />
      </Fragment>
    )
  }
}
export default DefaultLayout;
