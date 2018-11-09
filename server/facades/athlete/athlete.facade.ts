import {Request, Response} from 'express';
import stravaClient from "../stravaApi";
import handleResponsePromise from "../requestHelper";

type AthleteFacadeType = {
  handleGetAthlete: (req: Request, res: Response) => void;
};

class AthleteFacade implements AthleteFacadeType {

  public handleGetAthlete = (req: Request, res: Response) => handleResponsePromise(res, stravaClient.getAthlete(req.body.token));
}

export const facade = new AthleteFacade();
