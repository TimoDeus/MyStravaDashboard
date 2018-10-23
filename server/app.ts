import * as express from "express";
import * as bodyParser from "body-parser";
import apiRouter from "./router/apiRouter";
import frontendRouter from "./router/frontendRouter";

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.configure();
  }

  private configure() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use("/api", apiRouter);
    this.app.use(frontendRouter);
  }
}

export default new App().app;
