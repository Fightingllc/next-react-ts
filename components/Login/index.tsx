/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 16:11:15
 * @LastEditTime: 2022-08-24 19:40:39
 * @FilePath: \next-react-ts\components\Login\index.tsx
 */

import React, { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

// children 是由next.js 提供的
const Login = (props: IProps) => {

  const { isShow = false } = props;

  const [form, setForm] = useState({phone: '', verigy: ''});

  console.log(setForm);
  
  // 该方法 获取input中的值 返回一个 event 从event中解构出所需要的值 然后通过setState 修改form中的值
  const handleFormChange = (e:any) => {
    // console.log(e);
    const { name, value} = e?.target;
    setForm({
      ...form,

      [name]:value
    })
    
  }

  // 关闭login窗口
  const handleClose = () => {};

  // 获取验证码
  const handleVerifyCode = () => {}

  // 登录
  const handleLogin = () => {}

  // 使用GitHub登录
  const handleOtherGithub = () => {}

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
        <span className={styles.verifyCode} onClick={handleVerifyCode}>获取验证码</span>
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
