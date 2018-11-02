import {Request, Response} from 'express';
import stravaClient from "../../controllers/stravaApi";
import responseHandler from "../responseHandler";

type AuthenticationFacadeType = {
  handleAuthenticate: (req: Request, res: Response) => void;
};

class AuthenticationFacade implements AuthenticationFacadeType {

  public handleAuthenticate = (req: Request, res: Response) => {
    const code = req.body.code;
    stravaClient.authenticate({code}, responseHandler(res));
  };
}

export const facade = new AuthenticationFacade();
