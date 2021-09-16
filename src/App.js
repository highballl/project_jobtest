import React from "react";
import Start from "./components/Start";
import Prepare from "./components/Prepare";
import Process from "./components/Process";
import Complete from "./components/Complete";
import Result from "./components/Result";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/prepare" component={Prepare} />
          <Route exact path="/process" component={Process} />
          <Route exact path="/complete" component={Complete} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;