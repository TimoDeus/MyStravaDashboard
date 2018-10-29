import {AUTHORIZE_FAILURE, AUTHORIZE_SUCCESS, AuthorizeAction} from "app/actions/authorization/types";

export interface AuthorizationState {
  accessToken?: string;
}

export const authorization = (state: AuthorizationState = {}, action: AuthorizeAction) => {
  switch (action.type) {
    case AUTHORIZE_SUCCESS:
      return {...state, accessToken: action.payload.token};
    case AUTHORIZE_FAILURE:
      return {...state, authorization: {}};
  }
  return state;
};
