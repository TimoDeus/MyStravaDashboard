import * as constants from './types';
import {AuthorizeAction} from './types';
import {ActionCreator} from 'redux';
import {AsyncThunkAction, DispatchThunk} from 'app/actions/types';
import axios from 'axios';
import stravaConfig from '../../../utils/strava.config';
import {StravaAuthResponse} from "../../../../types/authentication";

export const authorize: ActionCreator<AsyncThunkAction<AuthorizeAction>> = (code: string) => (dispatch: DispatchThunk<AuthorizeAction>) => {

  dispatch({type: constants.AUTHORIZE_REQUEST});
  return axios.post<StravaAuthResponse>(stravaConfig.getTokenUrl(), stravaConfig.getTokenOptions(code)).then(
    ({data}) => dispatch({type: constants.AUTHORIZE_SUCCESS, payload: {token: data.access_token, athlete: data.athlete}}),
    () => dispatch({type: constants.AUTHORIZE_FAILURE})
  );
};
