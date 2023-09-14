import { useEffect, useState } from 'react';

export function useAppHeight() {
  const [appHeight, setAppHeight] = useState<number | string>('100vh');

  useEffect(() => {
    const getAppHeight = () => {
      const appElement = document.querySelector(".App");
      if (appElement) {
        const height = appElement.getBoundingClientRect().height;
        setAppHeight(height < window.innerHeight ? '100vh' : height);
      }
    };

    getAppHeight();

    window.addEventListener("resize", getAppHeight);

    return () => {
      window.removeEventListener("resize", getAppHeight);
    };
  }, []);

  return appHeight;
}
