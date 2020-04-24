import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
