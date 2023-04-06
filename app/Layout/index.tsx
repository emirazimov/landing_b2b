import dynamic from "next/dynamic";
import React, { FC } from "react";

//Types
import { LayoutProps } from "./layout.types";

//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
const ContactUsModal = dynamic(() => import("./components/ContactUsModal"));

const Layout: FC<LayoutProps> = ({ title, children, description }) => {

  return (
    <>
      <Header />
      <main
        className={`
          min-h-screen flex justify-center
        `}
      >
        <div className="max-w-full w-[1440px] px-[20px] m-auto">{children}</div>
        <ContactUsModal />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
