import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./component";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;
