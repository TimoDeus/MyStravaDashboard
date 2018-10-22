import * as express from "express";
import * as bodyParser from "body-parser";
import { ApiRoutes } from "./routes/apiRoutes";
import * as path from "path";

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');

class App {

  public app: express.Application;
  public routes: ApiRoutes = new ApiRoutes();

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.routes.addRoutes(this.app);

    const router = express.Router();
    router.use(express.static(DIST_DIR));
    this.app.use(router);
  }
}

export default new App().app;
