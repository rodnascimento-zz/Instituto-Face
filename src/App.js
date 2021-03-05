import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Calendario from "./components/Pages/Calendario";
import Turma from "./components/Pages/Turma";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/calendario" component={Calendario} />
            <Route path="/turma" component={Turma} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
