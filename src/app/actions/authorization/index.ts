import * as constants from './types';
import {ActionCreator, Dispatch} from "redux";
import {VoidThunkAction} from "app/actions/types";
import {AuthorizeAction} from "./types";

export const storeToken: ActionCreator<VoidThunkAction<AuthorizeAction>> = (code: string) => (dispatch: Dispatch) => {
  // TODO use the code to get the real accessToken
  dispatch({type: constants.AUTHORIZE_SUCCESS, payload: {token: code}});
};
