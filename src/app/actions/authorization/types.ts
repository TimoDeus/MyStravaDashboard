export interface AuthorizationPayload {
  token: string
}

export interface AuthorizeRequest {
  type: AUTHORIZE_REQUEST;
}

export interface AuthorizeSuccess {
  type: AUTHORIZE_SUCCESS;
  payload: AuthorizationPayload
}

export interface AuthorizeFailure {
  type: AUTHORIZE_FAILURE;
}

export type AuthorizeAction = AuthorizeRequest | AuthorizeSuccess | AuthorizeFailure;

export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
export type AUTHORIZE_REQUEST = typeof AUTHORIZE_REQUEST;

export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export type AUTHORIZE_SUCCESS = typeof AUTHORIZE_SUCCESS;

export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';
export type AUTHORIZE_FAILURE = typeof AUTHORIZE_FAILURE;
