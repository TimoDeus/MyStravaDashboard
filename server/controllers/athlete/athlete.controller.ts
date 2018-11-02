import {Router} from 'express';
import {AthleteFacade} from "../../facades";

const router: Router = Router();

router.post('/', AthleteFacade.handleGetAthlete);

export const AthleteController: Router = router;
