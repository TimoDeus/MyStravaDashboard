import {Response} from 'express';
import {AxiosPromise} from "axios";

class RequestHelper {

  handleResponsePromise = (res: Response, promise: AxiosPromise<any>) =>
    promise.then(
      ({status, data}) => res.status(status).json(data),
      ({response: {status, data}}) => res.status(data.response.status).json(data.response.data));
}

export default new RequestHelper().handleResponsePromise;
