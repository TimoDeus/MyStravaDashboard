import * as React from 'react';
import {connect} from "react-redux";
import {RootState} from "app/reducers";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "app/containers/Dashboard";
import Login from "app/containers/Login";
import NoMatch from "app/containers/404";
import OauthCallback from "app/containers/OauthCallback";

interface Props {
  token?: string;
}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/oauth-callback' component={OauthCallback}/>
        <Route path='/' exact={true} component={props.token ? Dashboard : Login}/>
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({authorization}: RootState) => ({
  token: authorization.accessToken,
});

export default connect(mapStateToProps)(App);
