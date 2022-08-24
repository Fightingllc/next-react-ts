/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 16:08:09
 * @LastEditTime: 2022-08-24 17:48:45
 * @FilePath: \next-react-ts\components\layout\index.tsx
 */
import { NextPage } from 'next'
import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

// children 是由next.js 提供的
const  Layout: NextPage = ({ children }) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout