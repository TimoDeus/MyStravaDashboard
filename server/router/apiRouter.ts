import {Router} from "express";
import {getRoutes, postRoutes} from "../routes/api";

class ApiRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.addRoutes();
  }

  addRoutes = () => {
    getRoutes.map(route => this.router.get(route.path, route.handler));
    postRoutes.map(route => this.router.post(route.path, route.handler));
  }
}

export default new ApiRouter().router;
