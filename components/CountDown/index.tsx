/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 20:24:12
 * @LastEditTime: 2022-08-24 20:54:12
 * @FilePath: \next-react-ts\components\CountDown\index.tsx
 */
import React, { useEffect, useState } from 'react'
import styles from "./index.module.scss"

// 倒计时
interface IProps {
    time: number,
    onEnd: Function
}

const  CountDown = (props: IProps) => {

    const {time,onEnd} = props
    // 倒计时时间
    const [count, setCount] = useState(time || 60);


    useEffect(() => {
        // 定时器记得清除
        const id = setInterval(() => {
            setCount((count) => {
                if (count === 0) {
                    clearInterval(id);
                    onEnd && onEnd();
                    return count
                }
                return count - 1;
            });
            return () => {
                clearInterval(id);
            }
        }, 1000)
    },[time,onEnd]);

  return (
    <div className={styles.countDown}>
        {count}
    </div>
  )
}

export default CountDown