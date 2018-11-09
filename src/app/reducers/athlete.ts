import {AthleteState} from "../../../types/athlete";
import {ATHLETE_FAILURE, ATHLETE_SUCCESS, AthleteAction} from "app/actions/athlete/types";

export const athlete = (state: AthleteState = {}, action: AthleteAction) => {
  switch (action.type) {
    case ATHLETE_SUCCESS:
      return {...state, ...action.payload};
    case ATHLETE_FAILURE:
      return {};
  }
  return state;
};
