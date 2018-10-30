import * as express from "express";
import * as bodyParser from "body-parser";
import apiRouter from "./router/apiRouter";
import * as dotenv from 'dotenv';
import * as cors from "cors";

class App {

  public app: express.Application;

  constructor() {
    dotenv.config({path: 'server/.env'});
    this.app = express();
    this.configure();
  }

  private configure() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cors());
    this.app.use("/api", apiRouter);
  }
}

export default new App().app;
