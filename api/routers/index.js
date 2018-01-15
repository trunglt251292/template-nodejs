//quan ly routers
import {Router} from 'express';
import RouterExam from './routerexam';

const router = new Router();

router.use('/exam',RouterExam);

export default router;
