import React from "react";
import "../app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import StoreProvider from "../components/Store/Provider";
import RoutesPrivate from "../components/Routes/Private/Private";

import Home from "../components/Pages/Home";
import Calendario from "../components/Pages/Calendario";
import Turma from "../components/Pages/Turma";

const PagesPrincipal = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/principal/home" component={Home} />
            <Route path="/principal/calendario" component={Calendario} />
            <Route path="/principal/turma" component={Turma} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default PagesPrincipal;
