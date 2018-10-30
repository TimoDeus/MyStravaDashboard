import {Router} from "express";
import {AuthenticationController} from "../controllers";

class ApiRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.addControllers();
  }

  addControllers = () => {
    this.router.use('/authentication', AuthenticationController);
  }
}

export default new ApiRouter().router;
