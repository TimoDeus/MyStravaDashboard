import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Switch} from "react-router";
import OauthCallback from "app/containers/OauthCallback";
import Login from "app/containers/Login";
import Dashboard from "app/containers/Dashboard";
import NoMatch from "app/containers/404";

export const App = hot(module)(() => (
  <Switch>
    <Route path='/oauth-callback' component={OauthCallback}/>
    <Route path='/login' component={Login}/>
    <Route path='/' exact={true} component={Dashboard}/>
    <Route component={NoMatch}/>
  </Switch>
));
