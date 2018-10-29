import * as constants from './types';
import {AuthorizeAction} from './types';
import {ActionCreator} from "redux";
import {AsyncThunkAction, DispatchThunk} from "app/actions/types";

export const getActivities: ActionCreator<AsyncThunkAction<AuthorizeAction>> = () => (dispatch: DispatchThunk<AuthorizeAction>) => {
  // TODO fix this dummy stuff, it's just here to remember how it works...
  dispatch({type: constants.AUTHORIZE_REQUEST});
  return Promise.resolve().then(
    () => dispatch({type: constants.AUTHORIZE_SUCCESS, payload: {token: 'foo'}}),
    () => dispatch({type: constants.AUTHORIZE_FAILURE})
  );
};
