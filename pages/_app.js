import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styled-components/globalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
