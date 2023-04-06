import React, { useEffect } from "react";

//Layout
import Layout from "@/app/Layout";

//Components
import Intro from "@/app/Intro";
import WhyBookinglane from "@/app/WhyBookinglane";
import BookingTool from "@/app/BookingTool";
import About from "@/app/About";
import Partnered from "@/app/Partnered";
import Pricing from "@/app/Pricing";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <>
        <Intro />
        <WhyBookinglane />
        <Pricing />
        <BookingTool />
        <About />
        <Partnered />
      </>
    </Layout>
  );
}
