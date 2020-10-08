import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Stills from "./components/Stills.jsx";
import About from "./components/About.jsx";
import Advertisements from "./components/Advertisements.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/stills" component={Stills} />
          <Route path="/about" component={About} />
          <Route path="/advertisements" component={Advertisements} />
          <Route exact path="/" component={Stills} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
