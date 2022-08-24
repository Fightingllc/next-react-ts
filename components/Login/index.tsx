/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 16:11:15
 * @LastEditTime: 2022-08-24 20:59:51
 * @FilePath: \next-react-ts\components\Login\index.tsx
 */

import CountDown from 'components/CountDown';
import React, { ChangeEvent, useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

// children 是由next.js 提供的
const Login = (props: IProps) => {

  // 弹窗的显示与隐藏
  const { isShow = false , onClose} = props;

  const [form, setForm] = useState({phone: '', verify: ''});

  // 获取验证码：倒计时结束后 显示与隐藏
  const [isShowVerifyCode,setIsShowVerifyCode] = useState(false);
  
  // 该方法 获取input中的值 返回一个 event 从event中解构出所需要的值 然后通过setState 修改form中的值
  const handleFormChange = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    const { name, value } = e.target;
    setForm({
      ...form,

      [name]:value
    })
    
  }

  // 关闭login窗口
  const handleClose = () => {
    onClose && onClose()
  };

  // 获取验证码
  const handleVerifyCode = () => {
    setIsShowVerifyCode(true)
  }

  // 登录
  const handleLogin = () => {}

  // 使用GitHub登录
  const handleOtherGithub = () => {}

  // 获取验证码倒计时 的事件
  const handleGetCountDownEnd = () => {
    setIsShowVerifyCode(false)
  }

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
      <div className={styles.loginTitle}>
        <div>手机号登录</div>
        <div className={styles.close} onClick={handleClose}>
          x
        </div>
      </div>
      <input 
        name='phone' 
        type="text" 
        placeholder='请输入手机号' 
        value={form.phone}
        onChange={handleFormChange}
      />

      <div className={styles.verifyCodeArea}>
        <input 
          name='verify' 
          type="text" 
          placeholder='请输入验证码' 
          value={form.verify}
          onChange={handleFormChange}
        />
        <span className={styles.verifyCode} onClick={handleVerifyCode}>
          {
            isShowVerifyCode ? <CountDown time={10} onEnd={handleGetCountDownEnd}/> : '获取验证码'
          }
        </span>
      </div>

      <div className={styles.loginBtn} onClick={handleLogin}>登录</div>
      <div className={styles.otherLoginBtn} onClick={handleOtherGithub}>使用Github登录</div>

      {/* 协议 */}
      <div className={styles.loginPrivacy}>
        注册登录即表示同意
        {/* blank在新窗口打开 */}
        <a href='https://moco.imooc.com/privacy.html' target="_blank">隐私政策</a>
      </div>
    </div>
    </div>
  ) : null;
};

export default Login;
