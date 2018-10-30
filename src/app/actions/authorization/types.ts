import {AthleteType} from "../../../../types/athlete";

interface AuthorizationPayload {
  token: string;
  athlete: AthleteType
}

interface AuthorizeRequest {
  type: AUTHORIZE_REQUEST;
}

interface AuthorizeSuccess {
  type: AUTHORIZE_SUCCESS;
  payload: AuthorizationPayload
}

interface AuthorizeFailure {
  type: AUTHORIZE_FAILURE;
}

export type AuthorizeAction = AuthorizeRequest | AuthorizeSuccess | AuthorizeFailure;

export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
type AUTHORIZE_REQUEST = typeof AUTHORIZE_REQUEST;

export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
type AUTHORIZE_SUCCESS = typeof AUTHORIZE_SUCCESS;

export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';
type AUTHORIZE_FAILURE = typeof AUTHORIZE_FAILURE;
