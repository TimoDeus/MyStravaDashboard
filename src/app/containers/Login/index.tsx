import * as React from 'react';
import {authorize, RTDispatch} from "app/actions/authorization";
import {connect} from "react-redux";

interface Props {
  doLogin: () => void;
}

const Login = (props: Props) => <div><button onClick={props.doLogin}>Login please</button></div>;

const mapDispatchToProps = (dispatch: RTDispatch) => ({
  doLogin: () => dispatch(authorize()),
});

export default connect(null, mapDispatchToProps)(Login);
