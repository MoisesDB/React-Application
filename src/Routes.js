import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import User from "./pages/user";

const Routes = () => {
  const token = localStorage.getItem("token") ?? undefined;

  return (
    <BRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {!!token && (
          <>
            <Route path="/user" component={User} />
            <Route path="/repos" component={User} />
            <Route path="/starred" component={User} />
            <Route path="/followers" component={User} />
            <Route path="/following" component={User} />
          </>
        )}
      </Switch>
    </BRouter>
  );
};

export default Routes;
