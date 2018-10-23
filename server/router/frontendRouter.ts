import * as express from "express";
import {isProduction} from "../../src/app/utils";
import * as webpack from "webpack";
import {webpackConfig} from "../webpackConfig";
import * as middleware from "webpack-dev-middleware";
import * as path from "path";

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');

class FrontendRouter {

  router: any;

  constructor() {
    this.router = isProduction() ? this.createStaticRouter() : this.createWebpackRouter()
  }

  createStaticRouter = () => {
    const router = express.Router();
    router.use(express.static(DIST_DIR));
    return router;
  };

  createWebpackRouter = () => {
    const compiler = webpack(webpackConfig);
    return middleware(compiler, {publicPath: '/'});
  };
}

export default new FrontendRouter().router;
