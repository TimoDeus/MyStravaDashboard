import {Request, Response} from 'express';
import stravaClient from "../../controllers/stravaApi";
import handleResponsePromise from "../requestHelper";

type AthleteFacadeType = {
  handleGetAthlete: (req: Request, res: Response) => void;
};

class AthleteFacade implements AthleteFacadeType {

  public handleGetAthlete = (req: Request, res: Response) => {
    return handleResponsePromise(res, stravaClient.getAthlete(req.body.token));
  };
}

export const facade = new AthleteFacade();
