import React from "react";
import Router from "next/router";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
import theme from "../theme.js";
import * as gtag from "@/lib/analytics";

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
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
