import {Router} from "express";
import {AthleteController, AuthenticationController} from "../controllers";

class ApiRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.addControllers();
  }

  addControllers = () => {
    this.router.use('/authentication', AuthenticationController);
    this.router.use('/athlete', AthleteController);
  }
}

export default new ApiRouter().router;
