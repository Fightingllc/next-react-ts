/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-26 20:51:03
 * @LastEditTime: 2022-08-26 20:58:58
 * @FilePath: \next-react-ts\service\fetch.ts
 */
import axios from 'axios';

// 实例化
const requestInstance = axios.create({
    baseURL: '/'
})

// 拦截器 可自行配置
requestInstance.interceptors.request.use(
    (config) => config,
    (err) => Promise.reject(err)
)

// response
requestInstance.interceptors.response.use(response => {
    if (response?.status === 200) {
        return response?.data
    } else {
        return{
            code: -1,
            msg: "未知错误",
            data: null
        }
    }
}, (err) => Promise.reject(err))

export default requestInstance