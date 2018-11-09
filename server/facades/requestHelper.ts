import {Response} from 'express';
import stravaClient from "../controllers/stravaApi";

class RequestHelper {

  executeRequest = (res: Response, func: (...args: any[]) => void, params: any[] = []): void => {
    try {
      func.apply(stravaClient, [...params, this.handleResponse(res)]);
    } catch (err) {
      console.error(err);
      res.status(401).end();
    }
  };

  handleResponse = (res: Response) => (error: any, body: any): void => {
    if (error) {
      console.error(error.message, body.message, body.errors, error.stack);
      res.status(body.statusCode).json({message: body.message, errors: body.errors});
    } else {
      res.status(body.statusCode).json(body);
    }
  };
}

export default new RequestHelper().executeRequest;
