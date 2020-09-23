import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import NotFound from "./components/notfound/NotFound";
import TestFetch from "./components/testfetch/TestFetch";
import Jeopardy from "./components/jeopardy/Jeopardy";
//import Display from './components/display/Display';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route
          path="/welcome/:name"
          render={(props) => {
            return <Welcome {...props} name={props.match.params.name} />;
          }}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/TestFetch" component={TestFetch} />
        <Route path="/contact" component={Contact} />
        <Route path="/Jeopardy" component={Jeopardy} />
        <Route
          path="/"
          render={(props) => <Welcome {...props} name="Davey Struss" />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
