import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/Connexion";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" component={About} />
        <Route path="/connexion" component={Connexion} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
