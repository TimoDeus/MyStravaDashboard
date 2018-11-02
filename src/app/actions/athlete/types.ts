import {AthleteState} from "../../../../types/athlete";

export type AthletePayload = {
  athlete: AthleteState;
}

interface AthleteRequest {
  type: ATHLETE_REQUEST;
}

interface AthleteSuccess {
  type: ATHLETE_SUCCESS;
  payload: AthletePayload;
}

interface AthleteFailure {
  type: ATHLETE_FAILURE;
}

export type AthleteAction = AthleteSuccess | AthleteFailure | AthleteRequest;

export const ATHLETE_REQUEST = 'ATHLETE_REQUEST';
type ATHLETE_REQUEST = typeof ATHLETE_REQUEST;

export const ATHLETE_SUCCESS = 'ATHLETE_SUCCESS';
type ATHLETE_SUCCESS = typeof ATHLETE_SUCCESS;

export const ATHLETE_FAILURE = 'ATHLETE_FAILURE';
type ATHLETE_FAILURE = typeof ATHLETE_FAILURE;
