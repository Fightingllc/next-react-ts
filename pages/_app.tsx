/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 14:54:56
 * @LastEditTime: 2022-08-24 16:33:28
 * @FilePath: \next-react-ts\pages\_app.tsx
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp
