import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Advertisements from "./components/Advertisements.jsx";
import Navigation from "./components/Navigation.jsx";
import ScrollToTopBtn from "./utils/scrollToTopBtn";


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stills" component={Home} />
          <Route path="/advertisements" component={Advertisements} />
          <Route path="/about" component={About} />
        </Switch>
        <ScrollToTopBtn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
