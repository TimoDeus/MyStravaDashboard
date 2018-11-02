import {StravaAthleteType} from "../athlete/athlete";

export type StravaAuthRequestParams = {
  client_id: string | undefined;
  client_secret: string | undefined;
  code: string;
}

export type StravaAuthResponse = {
  access_token: string;
  token_type: string;
  statusCode: number;
  athlete: StravaAthleteType
}
