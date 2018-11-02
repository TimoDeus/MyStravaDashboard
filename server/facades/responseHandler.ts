import {Response} from 'express';

class ResponseHandler {
  handleResponse = (res: Response) => (error: any, body: any) => {
    if (error) {
      console.error(error.message, body.message, body.errors, error.stack);
      res.status(body.statusCode).json({message: body.message, errors: body.errors});
    } else {
      res.status(body.statusCode).json(body);
    }
  };
}

export default new ResponseHandler().handleResponse;
