import {Application, Request, Response} from "express";

export class Routes {
  public addRoutes(app: Application): void {
    app.route('/api')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        })
      })
  }
}