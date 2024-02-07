import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Home from "./Home";


export default function Index() {
  return (
    <div>
      <Head>
        <title>RoamReadyRides</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Home/>
    </div>
  );
}
