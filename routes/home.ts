import Router from 'koa-router';
import Koa from 'koa';


const router = new Router();


router.get('/',async (ctx: Koa.Context) => {
    ctx.body = `Hello, Api!`;
})

export default router;