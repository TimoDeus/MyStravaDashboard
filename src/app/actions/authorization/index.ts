import * as constants from './types';
import {AuthorizeAction} from './types';
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootState} from "app/reducers";

export type RTAction = ThunkAction<Promise<any>, RootState, null, AuthorizeAction>;
export type RTDispatch = ThunkDispatch<RootState, null, AuthorizeAction>;
export type GetState = () => RootState;

export const authorize: ActionCreator<RTAction> = () => (dispatch: Dispatch) => {
  dispatch({type: constants.AUTHORIZE_REQUEST});
  return Promise.resolve().then(
    () => dispatch({type: constants.AUTHORIZE_SUCCESS, payload: {token: 'foo'}}),
    () => dispatch({type: constants.AUTHORIZE_FAILURE})
  );
};
