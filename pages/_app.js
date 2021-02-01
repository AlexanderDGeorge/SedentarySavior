import { RecoilRoot } from "recoil";
import GlobalStyle from "../styled-components/globalStyle";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styled-components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon192.png" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="en" />

        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#ccff33" />
        <title>Sedentary Savior</title>
        <meta property="og:title" content="Sedentary Savior" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https:/" /> */}
        <meta property="og:image" content="/icon144.png" />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
