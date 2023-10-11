import { ironOptions } from 'config/index';
import { perpareConnection } from 'db';
import { User, UserAuth } from 'db/entity';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { ISession } from 'pages/api/index.d';

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { phone = '', verify = '', identity_type = 'phone' } = req.body;
  const session: ISession = req.session;

  try {
    const db = await perpareConnection();

    const userRepo = db.getRepository(User);
    const userAuthRepo = db.getRepository(UserAuth);

    const users = await userRepo.find();

    if (String(session.verifyCode) === String(verify)) {
      // 验证码正确，在user_auths 表中查找 identity_type 是否有记录
      const userAuth = await userAuthRepo.findOne({
        where: {
          identity_type,
          identifier: phone,
        },
        relations: ['user'],
      });
      if (userAuth) {
        // 已存在的用户
        const user = userAuth.user;
        const { id, nickname, avatar } = user;

        session.userId = id;
        session.nickname = nickname;
        session.avatar = avatar;

        await session.save();
        res?.status(200).json({
          code: 0,
          msg: '登录成功',
          data: {
            userId: id,
            nickname,
            avatar,
          },
        });
      } else {
        // 新用户，自动注册
        const user = new User();
        user.nickname = `用户${Math.floor(Math.random() * 1000)}`;
        user.avatar = '../../../public/images/default.jpg';
        user.job = '暂无';
        user.introduce = '暂无';

        const userAuth = new UserAuth();
        userAuth.identifier = phone;
        userAuth.identity_type = identity_type;
        userAuth.credential = session.verifyCode;
        userAuth.user = user;

        const resUserAuth = await userAuthRepo.save(userAuth);
        const {
          user: { id, nickname, avatar },
        } = resUserAuth;

        session.userId = id;
        session.nickname = nickname;
        session.avatar = avatar;

        console.log(resUserAuth);
        await session.save();
        res?.status(200).json({
          code: 0,
          msg: '登录成功',
          data: {
            userId: id,
            nickname,
            avatar,
          },
        });
      }
      //   console.log('User', userRepo.find());

      console.log('phone', phone);
      console.log('verify', verify);
      res?.status(200).json({ phone, verify, code: 0 });
    } else {
      res?.status(200).json({ code: -1, msg: '验证码错误' });
    }
  } catch (error) {
    console.log('error', error);
    res?.status(500).json({ error: 'Internal Server Error' });
  }
}
