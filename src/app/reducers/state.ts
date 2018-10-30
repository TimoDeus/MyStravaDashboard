import {RouterState} from 'react-router-redux';
import {AuthorizationState} from "app/reducers/authorization";
import {AthleteState} from "../../../types/athlete";

export interface RootState {
  router: RouterState;
  authorization: AuthorizationState;
  athlete: AthleteState;
}
