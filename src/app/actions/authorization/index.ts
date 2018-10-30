import * as constants from './types';
import {AuthorizeAction} from './types';
import {ActionCreator} from 'redux';
import {AsyncThunkAction, DispatchThunk} from 'app/actions/types';
import {AuthorizationPayload} from 'app/actions/authorization/types';
import axios from 'axios';
import {authenticate} from "app/config/restUrls";

export const authorize: ActionCreator<AsyncThunkAction<AuthorizeAction>> = (code: string) => (dispatch: DispatchThunk<AuthorizeAction>) => {
  dispatch({type: constants.AUTHORIZE_REQUEST});
  return axios.post<AuthorizationPayload>(authenticate, {code}).then(
    ({data}) => dispatch({type: constants.AUTHORIZE_SUCCESS, payload: data}),
    () => dispatch({type: constants.AUTHORIZE_FAILURE})
  );
};
