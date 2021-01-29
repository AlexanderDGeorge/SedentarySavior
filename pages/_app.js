import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styled-components/globalStyle";
import Head from "next/head";

function subscribeUser() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(function (reg) {
      reg.pushManager
        .subscribe({
          userVisibleOnly: true,
        })
        .then(function (sub) {
          console.log("Endpoint URL: ", sub.endpoint);
        })
        .catch(function (e) {
          if (Notification.permission === "denied") {
            console.warn("Permission for notifications was denied");
          } else {
            console.error("Unable to subscribe to push", e);
          }
        });
    });
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          reg.pushManager.getSubscription().then((sub) => {
            if (sub === null) {
              // Update UI to ask user to register for Push
              console.log("Not subscribed to push service!");
              subscribeUser();
            } else {
              // We have a subscription, update the database
              console.log("Subscription object: ", sub);
            }
          });
        })
        .catch((err) => console.error(err));
    }
  }, []);

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
