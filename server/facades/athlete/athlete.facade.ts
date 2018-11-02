import {Request, Response} from 'express';
import axios from "axios";
import {StravaAuthResponse} from "../../types/authentication/authentication";

const BASE_URL = "https://www.strava.com/api/v3/";

type AuthenticationFacadeType = {
  handleGetAthlete: (req: Request, res: Response) => void;
};

class AthleteFacade implements AuthenticationFacadeType {

  public handleGetAthlete = (req: Request, res: Response) => {
    const url = BASE_URL + 'athlete';
    const options = {};
    axios.post<StravaAuthResponse>(url, options).then(
      ({data}) => res.json({token: data.access_token, athlete: data.athlete})
    );
  };
}

export const facade = new AthleteFacade();
