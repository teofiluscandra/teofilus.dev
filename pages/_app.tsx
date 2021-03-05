import React from "react";
import Router from "next/router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/app";
import * as gtag from "@/lib/analytics";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ChakraProvider>
      <CSSReset />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
