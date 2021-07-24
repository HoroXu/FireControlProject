import React, { useState } from "react";
// import logo from "./logo.svg";
// import Home from "./pages/Home";
import Header from "./components/Header";
import CarouselCom from "./components/Carousel";
import CompanyInfo from "./components/CompanyInfo";
import Links from "./components/Links";
import Bottom from "./components/Bottom";
import Logo from "./components/Logo";
import "./App.less";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";

const App = () => {
  const [contactState, setContactState] = useState<any>({});
  return (
    <div className="App">
      <Router>
        <Logo />
        <Header />
        <CarouselCom />
        <Switch>
          {routes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
      <CompanyInfo setContactState={setContactState} />
      <Links />
      <Bottom contactState={contactState} />
    </div>
  );
};

export default App;
