import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import ContactUS from "./containers/ContactUS";
import Post from "./containers/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route exact path="/" component={Home} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/post" component={Post} />
      </div>
    </Router>
  );
}

export default App;
