import {AUTHORIZE_FAILURE, AUTHORIZE_SUCCESS, AuthorizeAction} from "app/actions/authorization/types";
import {AthleteState} from "../../../types/athlete";

export const athlete = (state: AthleteState = {}, action: AuthorizeAction) => {
  switch (action.type) {
    case AUTHORIZE_SUCCESS:
      return {...state, athlete: action.payload.athlete};
    case AUTHORIZE_FAILURE:
      return {...state, athlete: {}};
  }
  return state;
};
