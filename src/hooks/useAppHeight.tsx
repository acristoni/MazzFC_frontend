import { useEffect, useState } from 'react';

export function useAppHeight() {
  const [appHeight, setAppHeight] = useState<number | string>('100vh'); // Inicialize com '100vh' como valor padrão

  useEffect(() => {
    const getAppHeight = () => {
      const appElement = document.querySelector(".App");
      if (appElement) {
        const height = appElement.getBoundingClientRect().height;
        // Verifique se a altura é menor que 100vh, se for, defina '100vh'
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
