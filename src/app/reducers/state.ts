import { RouterState } from 'react-router-redux';
import {AuthorizationState} from "app/reducers/authorization";

export interface RootState {
  router: RouterState;
  authorization: AuthorizationState;
}
