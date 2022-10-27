import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
// import {ApploProvider} from '@appolo/client'
// import {useAppolo} from 'src/appolo'
import "../styles/index.css";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Layout from "src/components/layout";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>Home sweet home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Layout main={<Component {...pageProps} />} />;
      </SessionProvider>
    </>
  );
}

export default MyApp;
