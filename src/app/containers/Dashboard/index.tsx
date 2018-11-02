import * as React from 'react';
import {Component} from 'react';
import {DispatchThunk} from "app/actions/types";
import {AuthorizeAction} from "app/actions/authorization/types";
import {connect} from "react-redux";
import {getAthleteIfNeeded} from "app/actions/athlete";
import {RootState} from "app/reducers";
import {AthleteState} from "../../../../types/athlete";

interface Props {
  fetchAthlete: () => void;
  athlete: AthleteState
}

type ComponentProps = Props

class Dashboard extends Component<ComponentProps> {

  componentDidMount() {
    this.props.fetchAthlete();
  }

  render() {
    return <div>{this.props.athlete.firstname}'s super cool Dashboard</div>;
  }
}

const mapStateToProps = ({athlete}: RootState) => ({
  athlete
});

const mapDispatchToProps = (dispatch: DispatchThunk<AuthorizeAction>) => ({
  fetchAthlete: () => dispatch(getAthleteIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
