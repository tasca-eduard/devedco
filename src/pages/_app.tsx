import '../scss/main.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      })
    })

    const cards = document.querySelectorAll(".card:not(.minimal)");
    const containers = document.querySelectorAll(".container");
    cards.forEach((el) => observer.observe(el));
    containers.forEach((el) => observer.observe(el));

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
