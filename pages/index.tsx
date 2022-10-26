import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../src/components/layout";
export default function Home() {
  return <Layout main={<div>home</div>} />;
}
