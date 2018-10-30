import {StravaAuthRequestParams} from "../../types/authentication";

const BASE_URL = "https://www.strava.com/oauth/";
const CLIENT_ID = process.env.CLIENT_ID || '';
const CLIENT_SECRET = process.env.CLIENT_SECRET || '';

class StravaConfig {

  static getAuthUrl() {
    return BASE_URL + 'authorize?response_type=code&redirect_uri=http://localhost:3000/oauth-callback&client_id=' + CLIENT_ID;
  }

  static getTokenUrl() {
    return BASE_URL + 'token';
  }

  static getTokenOptions(code: string): StravaAuthRequestParams {
    return {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code
    };
  }
}

export default StravaConfig;
