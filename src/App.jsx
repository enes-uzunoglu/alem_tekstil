import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <Switch>
      <Categories />
      <Route path="/shop/:gender/:title" component={CategoryDetail} />
    </Switch>
  );
}

export default App;
