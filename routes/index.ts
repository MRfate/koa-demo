import Router from 'koa-router';
import home from "./home";
import user from "./v1/user";


const router = new Router();

router
    .use(home.routes(), home.allowedMethods())
    .use(user.routes(), user.allowedMethods())
;


export default router;