import * as express from "express";
import {Application} from "express";
import {isProduction} from "../../src/app/utils";
import * as webpack from "webpack";
import {webpackConfig} from "../webpackConfig";
import * as middleware from "webpack-dev-middleware";
import * as path from "path";
import * as history from "connect-history-api-fallback";

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');

class FrontendRouter {

  public addRoute = (app: Application) => {
    const router = isProduction() ? this.createStaticRouter() : this.createWebpackRouter(app);
    app.use(router);
  };

  createStaticRouter = () => {
    const router = express.Router();
    router.use(express.static(DIST_DIR));
    return router;
  };

  createWebpackRouter = (app: Application) => {
    const compiler = webpack(webpackConfig);
    app.use(history());
    return middleware(compiler, {publicPath: '/'});
  };
}

export default FrontendRouter;
