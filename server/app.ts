import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";

class App {

  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.routes.addRoutes(this.app);
  }
}

export default new App().app;
