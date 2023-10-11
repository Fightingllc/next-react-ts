/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-26 22:05:55
 * @LastEditTime: 2022-08-26 22:23:39
 * @FilePath: \next-react-ts\config\index.ts
 */
export const ironOptions = {
    cookieName: process.env.SESSION_COOKIE_NAME as string,
    password: process.env.SESSION_PASSWORD as string,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        //设置cookie 有效期 一天
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
    },
    // 环境变量可以通过next官方文档来配置
}