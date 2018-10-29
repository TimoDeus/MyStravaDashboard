import * as constants from './types';
import {AuthorizeAction} from './types';
import {ActionCreator} from "redux";
import {AsyncAction, DispatchThunk} from "app/actions/types";

export const authorize: ActionCreator<AsyncAction<AuthorizeAction>> = () => (dispatch: DispatchThunk<AuthorizeAction>) => {
  dispatch({type: constants.AUTHORIZE_REQUEST});
  return Promise.resolve().then(
    () => dispatch({type: constants.AUTHORIZE_SUCCESS, payload: {token: 'foo'}}),
    () => dispatch({type: constants.AUTHORIZE_FAILURE})
  );
};
