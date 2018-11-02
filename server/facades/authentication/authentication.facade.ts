import {Request, Response} from 'express';
import stravaClient from "../../controllers/stravaApi";
import executeRequest from "../requestHelper";

type AuthenticationFacadeType = {
  handleAuthenticate: (req: Request, res: Response) => void;
};

class AuthenticationFacade implements AuthenticationFacadeType {

  public handleAuthenticate = (req: Request, res: Response): void => {
    const code = req.body.code;
    executeRequest(res, stravaClient.authenticate, [{code}]);
  };
}

export const facade = new AuthenticationFacade();
