import React from 'react'
import Hero from './components/Hero';
import WeOffer from './components/WeOffer';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import TargetCompany from './components/TargetCompany';
import Footer from './components/Footer';
import Head from 'next/head';
import Review from './components/Review';


export default function Home() {

  return (
    <>
    <Head>
      <title>RoamReadyRides</title>
    </Head>
        <div className=' pt-16 lg:pt-10 overflow-hidden bg-slate-50'>
      {/* <Header/> */}
       <Hero/>
       <WeOffer/>
       <WhyChooseUs/>
       <TargetCompany/>
       <Review/>
       <Footer/>
    </div>
    </>

  );
}
