import * as express from "express";
import * as bodyParser from "body-parser";
import {ApiRoutes} from "./routes/apiRoutes";
import * as path from "path";
import * as middleware from "webpack-dev-middleware";
import * as webpack from "webpack";
import {webpackConfig} from "./webpackConfig";

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');
const DEV_MODE = process.env.NODE_ENV === 'development';

class App {

  public app: express.Application;
  public apiRoutes: ApiRoutes = new ApiRoutes();

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.apiRoutes.addRoutes(this.app);

    if (DEV_MODE) {
      const compiler = webpack(webpackConfig);
      this.app.use(middleware(compiler, {publicPath: '/'}));
    } else {
      const router = express.Router();
      router.use(express.static(DIST_DIR));
      this.app.use(router);
    }
  }
}

export default new App().app;
