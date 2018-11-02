require('dotenv').config({path: 'server/.env'});
import * as express from "express";
import * as bodyParser from "body-parser";
import apiRouter from "./router/apiRouter";
import * as cors from "cors";

class App {

  public app: express.Application;

  constructor() {
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
