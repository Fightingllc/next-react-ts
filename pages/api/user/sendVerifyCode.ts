import { ISession } from 'pages/api/index.d';
import type {NextApiRequest,NextApiResponse} from 'next';
import { format } from "date-fns";
import { encode } from "js-base64";
import md5 from "md5";
import request from 'service/fetch';
import {withIronSessionApiRoute} from 'iron-session/next'
import  {ironOptions}  from 'config/index';

/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-26 21:02:30
 * @LastEditTime: 2022-08-26 22:49:19
 * @FilePath: \next-react-ts\pages\api\user\sendVerifyCode.ts
 */
export default withIronSessionApiRoute(sendVerifyCode, ironOptions);

async function sendVerifyCode (req: NextApiRequest, res: NextApiResponse) {

    const {to = '', templateId = '1'} = req.body;
    const session:ISession = req.session;

    // 云通讯id
    const AppId = '8a216da882d55db10182da284a5001d3'
    const AccountId = '8a216da882d55db10182da28494c01cc';
    const AuthToken = '759f327e76ac47818fb48246e58ab3fe';
    const NowDate = format(new Date(), 'yyyyMMddHHmmss');
    const SigParameter = md5(`${AccountId}${AuthToken}${NowDate}`);
    const Authorization = encode(`${AccountId}:${NowDate}`);

    // 使用随机数产生一个四位数验证码  计算一千以上的四位数

    const verifyCode = Math.floor(Math.random() * (9999 - 1000) + 1000)
    // 验证码有效期
    const expireMinute = '5';

    const url = 'https://app.cloopen.com:8883/2013-12-26/Accounts/${AccountId}/SMS/TemplateSMS?sig=${SigParameter}';


    

    const response = await request.post(url, {
        to,
        templateId,
        appid: AppId,
        datas: [verifyCode, expireMinute]
    }, {
        headers: {
            Authorization
        }
    })


    console.log(to);
    console.log(templateId);

    console.log(response);
    
    const {statusCode, statusMsg,templateSMS} = response as any;

    if (statusCode === '000000') {
        session.verifyCode = verifyCode;
        await session.save()

        res.status(200).json( {
        code: 0,
        msg: statusMsg,
        data: {
            templateSMS
        }
    });
    } else {
        res.status(200).json( {
            code: statusCode,
            msg: statusMsg,
            data: {
                
            }
        });
        
    }
    
    
}