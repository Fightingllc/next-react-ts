/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-26 22:32:00
 * @LastEditTime: 2022-08-26 22:33:23
 * @FilePath: \next-react-ts\pages\api\index.d.ts
 */
import {IronSession} from 'iron-session'

export type ISession = IronSession & Record<string, any>