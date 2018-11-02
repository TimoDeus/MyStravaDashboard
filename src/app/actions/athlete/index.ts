import * as constants from './types';
import {ATHLETE_FAILURE, AthleteAction} from './types';
import {ActionCreator} from 'redux';
import {AsyncThunkAction, DispatchThunk, GetState} from 'app/actions/types';
import {AuthorizationPayload} from 'app/actions/authorization/types';
import axios from 'axios';
import {getAthlete} from "app/config/restUrls";
import {RootState} from "app/reducers";
import errorHandler from "app/actions/errorHandler";

const fetchAthlete: ActionCreator<AsyncThunkAction<AthleteAction>> = () => (dispatch: DispatchThunk<AthleteAction>) => {
  dispatch({type: constants.ATHLETE_REQUEST});
  return axios.post<AuthorizationPayload>(getAthlete, {}).then(
    ({data}) => dispatch({type: constants.ATHLETE_SUCCESS, payload: data}),
    errorHandler(dispatch, ATHLETE_FAILURE)
  );
};

const shouldFetchAthlete = ({athlete}: RootState) => !athlete || Object.getOwnPropertyNames(athlete).length == 0;

export const getAthleteIfNeeded = () => (dispatch: DispatchThunk<AthleteAction>, getState: GetState) => {
  if (shouldFetchAthlete(getState())) {
    return dispatch(fetchAthlete());
  }
  return;
};