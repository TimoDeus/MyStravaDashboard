import * as React from 'react';
import {authorize} from "app/actions/authorization";
import {connect} from "react-redux";
import {DispatchThunk} from "app/actions/types";
import {AuthorizeAction} from "app/actions/authorization/types";

interface Props {
  doLogin: () => void;
}

const Login = (props: Props) => (
  <div>
    <button onClick={props.doLogin}>Login please</button>
  </div>
);

const mapDispatchToProps = (dispatch: DispatchThunk<AuthorizeAction>) => ({
  doLogin: () => dispatch(authorize()),
});

export default connect(null, mapDispatchToProps)(Login);
