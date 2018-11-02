import * as React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "app/containers/Dashboard";
import Login from "app/containers/Login";
import NoMatch from "app/containers/404";
import OauthCallback from "app/containers/OauthCallback";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/oauth-callback' component={OauthCallback}/>
      <Route path='/login' component={Login}/>
      <Route path='/' exact={true} component={Dashboard}/>
      <Route component={NoMatch}/>
    </Switch>
  </BrowserRouter>
);

export default App;
