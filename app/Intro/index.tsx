import dynamic from "next/dynamic";
import React, { useCallback, useState } from "react";
import Image from "next/image";

//UI
import { Button } from "../UI";

//Hooks
import { useMobile } from "@/helpers/responsive.helper";

//Types
import { IntroRoleType } from "./intro.types";

//Utils
import { appLInks } from "@/utils/constants";

//Content
import MobileManager from "./components/MobileManager";
const MobileDriver = dynamic(() => import("./components/MobileDriver"));

const Intro = () => {
  const [role, setRole] = useState<IntroRoleType>("manager");

  const [playMarket, setPlayMarket] = useState<string>(appLInks.manager.play);
  const [appMarket, setAppMarket] = useState<string>(appLInks.manager.app);

  const { mobile, width } = useMobile(800);

  const handleChange = useCallback((roleSt: IntroRoleType) => {
    setRole(roleSt);
    setPlayMarket(appLInks[roleSt].play);
    setAppMarket(appLInks[roleSt].app);
  }, [role]);

  return (
    <div
      id="intro"
      className={`flex text-white min-h-screen items-center ${
        mobile ? "flex-col" : ""
      }`}
    >
      <div className={`w-full`}>
        <h1 className="text-xl md:text-2xl font-black mb-[30px] md:text-left text-center">
          Business management {!mobile ? <br /> : null}
          and booking platform {!mobile ? <br /> : null}
          for executive car service {!mobile ? <br /> : null}& limo companies
        </h1>
        <p className="text-base md:text-left text-center font-medium mb-[20px]">
          Bookinglane provides solutions that connect your business{" "}
          {!mobile ? <br /> : null}
          with clients and affiliates, and support your business in the{" "}
          {!mobile ? <br /> : null}
          long run - all in your smartphone.
        </p>
        <div className="gray flex p-[5px] rounded-lg m-auto w-[300px] md:w-[250px] md:mt-0 md:ml-0 mb-[20px]">
          <Button
            onClick={() => handleChange("manager")}
            className={`
                ${role === "manager" ? "blue" : "gray opacity-50"}
                rounded-lg py-[12px] md:py-[8px] px-[30px] transition hover:bg-gray-600 duration-500 w-2/4
            `}
          >
            Manager
          </Button>
          <Button
            onClick={() => handleChange("driver")}
            className={`
                ${role === "driver" ? "blue" : "gray opacity-50"}
                rounded-lg py-[12px] md:py-[8px] px-[30px] transition hover:bg-gray-600 duration-500 w-2/4
            `}
          >
            Driver
          </Button>
        </div>
        <div className="flex gap-[20px] md:justify-start justify-center">
          <a href={appMarket} target="_blank">
            <Image
              src="/images/appstore.svg"
              alt="appstore link"
              width={150}
              height={43}
              loading="lazy"
            />
          </a>
          <a href={playMarket} target="_blank">
            <Image
              src="/images/googleplay.svg"
              alt="google link"
              width={150}
              height={43}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div
        className={`relative w-full h-full py-[40px] md:py-0 md:min-h-screen md:m-auto mt-[20px] md:mt-0 flex items-center`}
      >
        {width >= 500 ? (
          role === "driver" ? (
            <MobileDriver />
          ) : (
            <MobileManager />
          )
        ) : role === "driver" ? (
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/driverMobileIcon.webp"
              alt="mobile image"
              width={300}
              height={width < 500 ? 400 : 800}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/mobileIcon.webp"
              alt="mobile image"
              width={300}
              height={width < 500 ? 400 : 800}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
