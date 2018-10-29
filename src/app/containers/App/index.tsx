import * as React from 'react';
import {connect} from "react-redux";
import {RootState} from "app/reducers";
import Login from "../Login";

interface Props {
  token?: string;
}

const App = (props: Props) => {
  return props.token ? <div>My fancy app.</div> : <Login/>;
};

const  mapStateToProps = ({ authorization }: RootState) => ({
  token: authorization.accessToken,
});

export default connect(mapStateToProps)(App);
