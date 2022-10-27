import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../src/components/layout";
import Map from "src/components/map";
export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2 pb-4" style={{ maxHeight: "calc(100vh-64px)" }}>
        house list
      </div>
      <div className="w-1/2">
        <Map />
      </div>
    </div>
  );
}
