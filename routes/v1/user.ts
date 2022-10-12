import Router from 'koa-router';

import * as userController from '../../controllers/user';

const router = new Router();

router.prefix("/user")

router.get('/save', userController.saveUser)
;


export default router;