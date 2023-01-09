import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { type } from "os";

const theme = createTheme({ type: "dark" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
