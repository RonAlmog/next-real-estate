import "../styles/globals.css";
import type { AppProps } from "next/app";

// import Head from 'next/head'
// import {ApploProvider} from '@appolo/client'
// import {useAppolo} from 'src/appolo'
// import {AuthProvider} from 'src/auth/useAuth'
// import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
