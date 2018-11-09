import {Request, Response} from 'express';
import stravaClient from "../../controllers/stravaApi";
import handleResponsePromise from "../requestHelper";

type AuthenticationFacadeType = {
  handleAuthenticate: (req: Request, res: Response) => void;
};

class AuthenticationFacade implements AuthenticationFacadeType {

  public handleAuthenticate = (req: Request, res: Response) => {
    return handleResponsePromise(res, stravaClient.authenticate(req.body.code));
  };
}

export const facade = new AuthenticationFacade();
