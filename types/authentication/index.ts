import {AthleteType} from "../athlete";

export interface StravaAuthRequestParams {
  client_id: string;
  client_secret: string;
  code: string;
}

export interface StravaAuthResponse {
  access_token: string;
  token_type: string;
  athlete: AthleteType
}
