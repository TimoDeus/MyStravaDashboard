import {Response} from 'express';
import {AxiosPromise} from "axios";

class RequestHelper {

  executeRequest = (res: Response, promise: AxiosPromise<any>): void => {
    promise.then(
      (body: any) => {
        res.status(200).json(body.data);
      },
      ({response}: any) => {
        res.status(response.status).json(response.data);
      });
  };
}

export default new RequestHelper().executeRequest;
