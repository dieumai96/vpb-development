import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
// import Images from "./index-sections/Images.js";  
// import BasicElements from "./index-sections/BasicElements.js";
// import Navbars from "./index-sections/Navbars.js";
// import Tabs from "./index-sections/Tabs.js";
// import Pagination from "./index-sections/Pagination.js";
// import Notifications from "./index-sections/Notifications.js";
// import Typography from "./index-sections/Typography.js";
// import Javascript from "./index-sections/Javascript.js";
// import Carousel from "./index-sections/Carousel.js";
// import NucleoIcons from "./index-sections/NucleoIcons.js";
// import CompleteExamples from "./index-sections/CompleteExamples.js";
// import SignUp from "./index-sections/SignUp.js";
// import Examples from "./index-sections/Examples.js";
// import Download from "./index-sections/Download.js";
import Menu from "./index-sections/Menu.js";
import routers from '../router';
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const loading = () => {
    return (
      <div className="grid-margin stretch-card" >
        <div className="loader-demo-box">
          <div className="bar-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/* <Images />    */}
          {/* <Menu />  */}

          {/* <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download /> */}
          <Suspense fallback={loading}>
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
              <Redirect from = "/" to = "/menu"/>              
            </Switch>
          </Suspense>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
