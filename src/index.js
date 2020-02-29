/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Loadable from 'react-loadable';
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
// import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
const styles = {
  position: 'absolute',
  transform: `translate(-50%, -50%)`,
  textAlign: 'center',
  top: '50%',
  left: '50%',
  height: '100%'
}
const loading = () => <div className="grid-margin stretch-card" style={styles}>
  <div className="loader-demo-box">
    <div className="bar-loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</div>

const Index = Loadable({
  loader: () => import('./views/Index'),
  loading
});
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </HashRouter>
  ,
  document.getElementById("root")
);
