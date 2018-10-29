import * as express from "express";
import * as bodyParser from "body-parser";
import apiRouter from "./router/apiRouter";
import FrontendRouter from "./router/frontendRouter";

class App {

  public app: express.Application;
  frontendRouter: FrontendRouter;

  constructor() {
    this.app = express();
    this.frontendRouter = new FrontendRouter();
    this.configure();
  }

  private configure() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use("/api", apiRouter);
    this.frontendRouter.addRoute(this.app);
  }
}

export default new App().app;
