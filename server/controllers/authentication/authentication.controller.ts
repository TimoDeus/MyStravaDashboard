import {Router} from 'express';
import {AuthenticationFacade} from "../../facades";

const router: Router = Router();

router.get('/getAuthUrl', AuthenticationFacade.handleGetAuthUrl);
router.post('/', AuthenticationFacade.handleAuthenticate);


export const AuthenticationController: Router = router;
