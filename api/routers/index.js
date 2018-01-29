//quan ly routers
import {Router} from 'express';
import RouterExam from './exam.router';

const router = new Router();

router.use('/exam',RouterExam);

export default router;
