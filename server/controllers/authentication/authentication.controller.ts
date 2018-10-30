import {Router} from 'express';
import {AuthenticationFacade} from "../../facades";

const router: Router = Router();

router.post('/', AuthenticationFacade.handleAuthenticate);

export const AuthenticationController: Router = router;
