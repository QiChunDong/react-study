import { useEffect, useState } from "react";

// 自定义hook 就是定义一个函数，通过use开头，将复用的变量和逻辑进行抽离
export function useTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 通过return一个函数的形式，返回一个effect的cleanup逻辑
    return () => {
      clearInterval(interval);
    };
  }, []);

  return { time };
}
