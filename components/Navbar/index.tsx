/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 16:11:15
 * @LastEditTime: 2022-08-24 17:50:51
 * @FilePath: \next-react-ts\components\Navbar\index.tsx
 */
import { NextPage } from 'next';
import { Button } from 'antd';
import Login from 'components/Login';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { navs } from './config';


import styles from './index.module.scss'

// children 是由next.js 提供的
const Navbar: NextPage = () => {

  // 可以通过useRouter来获取路由信息
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);
  
  const handleGotoEditorPage = () => {
    
  }

  const handleLogin = () => {
    setIsShowLogin(true)
  }

  const handleClose = () => {
    setIsShowLogin(false)
  }
  return (
    <div className={styles.navBar}>
      <section className={styles.logArea}>log</section>
      <section className={styles.linkArea}>
        {
          // 此处加个问号，避免属性为null
          navs?.map((item) => (
            <Link key={item?.label} href={item.value}>
              <a className={pathname === item?.value ? styles.active : ''}>{item?.label}</a>
            </Link>
          ))
        }
      </section>

      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button type='primary' onClick={handleLogin}>登录</Button>
      </section>
      {/* login弹窗 */}
      <Login isShow={isShowLogin} onClose={handleClose}></Login>
    </div>
  );
};

export default Navbar;
