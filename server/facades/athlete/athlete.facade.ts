import {Request, Response} from 'express';
import stravaClient from "../../controllers/stravaApi";
import executeRequest from "../requestHelper";

type AthleteFacadeType = {
  handleGetAthlete: (req: Request, res: Response) => void;
};

class AthleteFacade implements AthleteFacadeType {

  public handleGetAthlete = (req: Request, res: Response): void => {
    executeRequest(res, stravaClient.athlete.get);
  };
}

export const facade = new AthleteFacade();
