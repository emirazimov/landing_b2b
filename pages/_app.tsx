import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

//Styles
import "../styles/globals.css";
import "../styles/Checkbox.css";
import { ModalOpenContext } from '@/context/modalOpenContext';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState<string>("");

  return (
    <>
      <Head>
        <title>
          Bookinglane: Business Management and Booking Platform for Executive
          Car Service | Limo Companies
        </title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="keywords"
          content="booking,book,bookinglane,trasnport,transportation,limo software,crm mobile,moile crm,Affiliate Network, Daily Business Management, Website Integration, Online Booking Tools, Instant Invoicing, No Office Required, Run Your Business on the Go, Increased Earnings, Limo Dispatch System,  Flight Tracker, Driver Tracker, Limo Dispatching System, Livery Software, Limo Service Scheduling Software, Best Limo Software, online reservations, friendly limo software"
        />
        <meta
          name="description"
          content="Bookinglane provides solutions that connect your business with clients and affiliates, and support your business in the long run - all in your smartphone"
        ></meta>
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        ></meta>
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        ></meta>

        {/* OG  */}
        <meta property="og:locale" content="en_US"></meta>
        <meta
          property="og:title"
          content="Bookinglane: Business Management and Booking Platform for Executive
          Car Service | Limo Companies"
        />
        <meta property="og:url" content="https://b2b.bookinglane.com/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="Bookinglane: Business Management and Booking Platform for Executive
          Car Service | Limo Companies"
        ></meta>
        <meta
          property="og:description"
          content="Bookinglane provides solutions that connect your business with clients and affiliates, and support your business in the long run - all in your smartphone."
        ></meta>
        <meta
          property="og:image"
          content="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/CompanyImageForSocialNetworkPreview.jpg"
        ></meta>

        {/*TWITTER*/}
        <meta
          property="twitter:title"
          content="Bookinglane: Business Management and Booking Platform for Executive
          Car Service | Limo Companies"
        ></meta>
        <meta
          property="twitter:description"
          content="Bookinglane provides solutions that connect your business with clients and affiliates, and support your business in the long run - all in your smartphone."
        ></meta>
        <meta
          property="twitter:image"
          content="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/CompanyImageForSocialNetworkPreview.jpg"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>

        <link
          rel="icon"
          href="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png"
        />

        <link rel="canonical" href="https://b2b.bookinglane.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;900&display=swap" rel="stylesheet" />

      </Head>
      <ModalOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Component {...pageProps} />
      </ModalOpenContext.Provider>
    </>
  )
}
