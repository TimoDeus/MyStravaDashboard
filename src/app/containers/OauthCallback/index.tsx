import * as React from 'react';
import {Component} from 'react';
import {DispatchThunk} from "app/actions/types";
import {AuthorizeAction} from "app/actions/authorization/types";
import {authorize} from "app/actions/authorization";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {History} from "history";
import * as qs from "query-string";

interface Props {
  processAuthorization: (token: string) => void;
  history: History
}

type ComponentProps = Props & RouteComponentProps<any>

class OauthCallback extends Component<ComponentProps> {

  componentDidMount() {
    const token = qs.parse(this.props.location.search).code;
    if (token) {
      this.props.processAuthorization(token.toString());
    }
  }

  render() {
    return <div>Loading...</div>;
  }
}

const mapDispatchToProps = (dispatch: DispatchThunk<AuthorizeAction>, ownProps: Props) => ({
  processAuthorization: (token: string) => {
    dispatch(authorize(token)).then(() => ownProps.history.push('/'));
  }
});

export default connect(null, mapDispatchToProps)(withRouter(OauthCallback));
