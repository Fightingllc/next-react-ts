import  {ironOptions}  from 'config/index';
import {withIronSessionApiRoute} from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(login, ironOptions);

async function login(req: NextApiRequest, res: NextApiResponse) {
    const { phone = '', verify = ''} = req.body;
    console.log("phone",phone)
    console.log("verify",verify)
    res?.status(200).json({phone, verify, code: 0})

}