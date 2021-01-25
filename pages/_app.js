import { RecoilRoot } from "recoil";
import GlobalStyle from "../styled-components/globalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
