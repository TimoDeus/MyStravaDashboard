import {Request, Response} from 'express';
import axios from "axios";
import {StravaAuthRequestParams, StravaAuthResponse} from "../../types/authentication/authentication";

const BASE_URL = "https://www.strava.com/oauth/";

type AuthenticationFacadeType = {
  handleAuthenticate: (req: Request, res: Response) => void;
};

class AuthenticationFacade implements AuthenticationFacadeType {

  public handleAuthenticate = (req: Request, res: Response) => {
    const code = req.body.code;
    const tokenUrl = BASE_URL + 'token';
    const options: StravaAuthRequestParams = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code
    };
    axios.post<StravaAuthResponse>(tokenUrl, options).then(
      ({data}) => res.json({token: data.access_token, athlete: data.athlete})
    );
  };
}

export const facade = new AuthenticationFacade();
