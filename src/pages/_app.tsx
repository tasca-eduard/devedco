import '../scss/main.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="fa" src="https://kit.fontawesome.com/7891e0bbfc.js" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
