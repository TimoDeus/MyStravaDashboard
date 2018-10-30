import {AUTHORIZE_FAILURE, AUTHORIZE_SUCCESS, AuthorizeAction} from "app/actions/authorization/types";
import {AthleteType} from "../../../types/athlete";

export const athlete = (state: AthleteType = {}, action: AuthorizeAction) => {
  switch (action.type) {
    case AUTHORIZE_SUCCESS:
      return {...state, athlete: action.payload.athlete};
    case AUTHORIZE_FAILURE:
      return {...state, athlete: {}};
  }
  return state;
};
