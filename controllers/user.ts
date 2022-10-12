import jwt from 'koa-jwt';
import Koa from 'koa';
import db from "../db";

const { sign } = require('jsonwebtoken');


export const saveUser = async (ctx: Koa.Context) => {
    const user = db.User.build({
        name: "1asd",
        password: "123123dasd",
        email: "2@q.com",
    });
    console.log(user)
    await user.save();

    const token = sign({ userID: user.id }, 'shared-secret', { expiresIn: '3h' }) // token 有效期为3小时
    ctx.cookies.set(
        'token',
        token,
        {
            domain: 'localhost', // 设置 cookie 的域
            path: '/', // 设置 cookie 的路径
            maxAge: 3 * 60 * 60 * 1000, // cookie 的有效时间 ms
            expires: new Date('2021-12-30'), // cookie 的失效日期，如果设置了 maxAge，expires 将没有作用
            httpOnly: true, // 是否要设置 httpOnly
            overwrite: true // 是否要覆盖已有的 cookie 设置
        }
    )
    ctx.body = token;
}