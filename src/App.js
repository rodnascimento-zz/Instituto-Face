import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";

import Home from "./components/Pages/Home";
import Calendario from "./components/Pages/Calendario";
import Turma from "./components/Pages/Turma";
import Login from "./pages/Login";
import Principal from "./pages/Principal";

export default function App() {
  return (
    /*<Router>
      <div className="App">
        <StoreProvider>
          <Switch>
            <div>
              <Navbar />
              <div className="container">
                <Sidebar />
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/calendario" component={Calendario} />
                  <Route path="/turma" component={Turma} />
                  <Route path="/login" component={Login} />
                </Switch>
              </div>
            </div>
          </Switch>
        </StoreProvider>
      </div>
    </Router>*/
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/principal/" component={Principal} />
          <Route path="/login" component={Login} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}
