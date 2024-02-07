import "@/styles/globals.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration:1800,
      offset:0
       });
 }, [])

 return (
  <>
    <Header/>
    <Component {...pageProps} />
  </>
);
}
