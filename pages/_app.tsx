import "../styles/index.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/hero.css";
import "../styles/mainContent.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
