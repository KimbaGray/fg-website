import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Stills from "./components/Stills.jsx";
import About from "./components/About.jsx";
import Advertisements from "./components/Advertisements.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Stills} />
          <Route exact path="/stills" component={Stills} />
          <Route path="/about" component={About} />
          <Route path="/advertisements" component={Advertisements} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
