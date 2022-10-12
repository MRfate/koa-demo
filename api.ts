import Koa from 'koa';
import jwt from 'koa-jwt';
import koaBodyParser from 'koa-bodyparser';
import router from './routes';


export const app = () => {
    const app = new Koa();

    // 限制body大小
    app.use(koaBodyParser({ formLimit: '200mb', jsonLimit: '200mb', textLimit: '200mb' }))

    app.use(jwt({
        secret: 'shared-secret',
        key: 'myJwtKey',
    }).unless({
        path: [/^\/public/, /\//, /^\/user\/save/]
    }));
    app.use(router.routes());
    app.use(router.allowedMethods());

    return app;
}