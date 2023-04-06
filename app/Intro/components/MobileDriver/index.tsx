import Image from "next/image";
import React, { FC, memo, useState } from "react";

//Types
import { MobileDriverI } from "./mobileDriver.types";

//UI
import { Button } from "@/app/UI";

//Helpers
import { useMobile } from "@/helpers/responsive.helper";

//Components
import Calendar from "./components/Colendar";

const MobileDriver: FC<MobileDriverI> = () => {
  const [tab, setTab] = useState(0);
  const [activeStatus, setActiveStatus] = useState(false);
  const { mobile, width } = useMobile(1180);

  return (
    <div className="w-full flex justify-center relative">
      {!mobile ? (
        <Image
          src="/images/intro.webp"
          alt="intro background"
          className="absolute"
          style={{ top: "-10%", width: "100%", height: "80vh" }}
          width={100}
          height={100}
          loading="eager"
          priority={true}
        />
      ) : null}
      <div className="relative">
        <div
          className="relative w-[320px] h-[700px] bg-black rounded-[40px] py-[15px] px-[15px]"
          style={{
            boxShadow: "inset 0px 0px 4px 2px rgba(255, 255, 255, 0.38",
          }}
        >
          <div
            className="absolute w-[3px] h-[90px] rounded-lg"
            style={{
              top: "160px",
              right: "-2px",
              background: "#3C3C3C",
              boxShadow: "1px 0px 0px rgba(255, 255, 255, 0.25);",
            }}
          ></div>
          <div
            className="absolute w-[3px] h-[40px] rounded-lg"
            style={{
              top: "100px",
              left: "-2px",
              background: "#3C3C3C",
              boxShadow: "1px 0px 0px rgba(255, 255, 255, 0.25);",
            }}
          ></div>
          <div
            className="absolute w-[3px] h-[60px] rounded-lg"
            style={{
              top: "160px",
              left: "-2px",
              background: "#3C3C3C",
              boxShadow: "1px 0px 0px rgba(255, 255, 255, 0.25);",
            }}
          ></div>
          <div
            className="absolute w-[3px] h-[60px] rounded-lg"
            style={{
              top: "230px",
              left: "-2px",
              background: "#3C3C3C",
              boxShadow: "1px 0px 0px rgba(255, 255, 255, 0.25);",
            }}
          ></div>
          {!mobile ? (
            <>
              <span
                style={{
                  top: "140px",
                  left: "-120px",
                  background: "#EE3757",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px]"
              >
                Canceled
              </span>
              <span
                style={{
                  top: "210px",
                  left: "-170px",
                  background: "#368D69",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px]"
              >
                ETA 8:00 AM
              </span>
              <span
                style={{
                  top: "460px",
                  right: "-120px",
                  background: "#D66D33",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px] z-[100]"
              >
                Delayed ETA 8:45 PM
              </span>
              <span
                style={{
                  top: "360px",
                  left: "-260px",
                  fontSize: "14px",
                  borderColor: "#5B6267",
                  zIndex: 30,
                }}
                className={`border-[3px] bg-[#0A0A0B] flex flex-col items-center gap-[20px] absolute rounded-xl p-[16px] transition-all duration-500 ${
                  tab ? "ml-[-40px] opacity-0" : "ml-0 opacity-100"
                }`}
              >
                <div className="flex items-center w-[280px] justify-center relative gap-[6px]">
                  <span className="opacity-50">Pick up:</span>
                  <span className="font-medium">07/24/2023 at 12:00 PM</span>
                </div>
                <div className="flex items-center w-[280px] justify-center relative gap-[6px]">
                  <span className="opacity-50">From:</span>
                  <span className="font-medium">Street name</span>
                </div>
                <div className="flex gap-[6px]">
                  <Button
                    className={`
                      rounded-lg bg-transparent border-2 border-white cursor-pointer hover:bg-gray-600 py-[12px] md:py-[8px] px-[40px] transition duration-500 w-2/4 flex flex-col text-center items-center
                    `}
                  >
                    <span className="text-[12px] font-medium">Decline</span>
                  </Button>
                  <Button
                    className={`
                      rounded-lg blue cursor-pointer hover:bg-gray-600 py-[12px] md:py-[8px] px-[40px] transition duration-500 w-2/4 flex items-center gap-[6px] relative
                    `}
                  >
                    <span className="text-[12px] font-medium">Accept</span>
                  </Button>
                </div>
              </span>
              <span
                style={{
                  top: "520px",
                  right:
                    width < 1300 ? (width < 500 ? "-50px" : "-90px") : "-140px",
                  fontSize: "13px",
                  borderColor: "#5B6267",
                  zIndex: 30,
                }}
                className={`border-[3px] bg-[#0A0A0B] flex items-center gap-[6px] absolute cursor-pointer rounded-xl py-[20px] px-[30px] transition-all duration-500 ${
                  tab ? "mr-[-40px] opacity-0" : "mr-0 opacity-100"
                }`}
              >
                <span className="opacity-50">New reservations:</span>

                <span className="font-medium">12</span>
              </span>
              <Calendar />
            </>
          ) : null}
          <div
            className="h-full w-full rounded-[25px] py-[5px] px-[15px]"
            style={{
              background:
                "url(/images/formobile/driverbackground.svg) center top",
            }}
          >
            <div className="flex items-center justify-between px-[10px]">
              <span style={{ fontSize: "12px" }} className="font-medium">
                9:41
              </span>

              <div className="flex">
                <Image
                  src="/images/Cell.svg"
                  alt="Cell"
                  width={15}
                  height={12}
                  loading="lazy"
                />
                <Image
                  src="/images/Wifi.svg"
                  alt="Wifi"
                  width={17}
                  height={14}
                  loading="lazy"
                />
                <Image
                  src="/images/Battery.svg"
                  alt="Battery"
                  width={20}
                  height={12}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pt-[10px] transition-all duration-500 relative h-full">
              <div className="flex justify-between items-center">
                <div className="w-auto flex flex-col justify-between gap-[3px] cursor-pointer">
                  <span className="w-[13px] h-[1px] bg-white"></span>
                  <span className="w-[13px] h-[1px] bg-white"></span>
                  <span className="w-[13px] h-[1px] bg-white"></span>
                </div>
                <span className="font-medium text-[13px] relative flex items-center ml-[30px] cursor-pointer">
                  Bookinglane
                  <span
                    className="absolute rotate-90 text-lg"
                    style={{ right: -15 }}
                  >
                    &#8250;
                  </span>
                </span>
                <div className="text-[10px] bg-[#0A0A0B] p-[2px] rounded-xl">
                  <Button
                    onClick={() => setActiveStatus(true)}
                    className={`py-[2px] px-[4px] ${
                      activeStatus ? "bg-green-500" : "opacity-50"
                    } rounded-xl transition-all duration-500`}
                  >
                    <span>Offline</span>
                  </Button>
                  <Button
                    onClick={() => setActiveStatus(false)}
                    className={`py-[2px] px-[4px] ${
                      !activeStatus ? "bg-green-500" : "opacity-50"
                    } rounded-xl transition-all duration-500`}
                  >
                    <span>Online</span>
                  </Button>
                </div>
              </div>
              <div className="w-full flex justify-center mt-[20px]">
                <div className="rounded-lg flex text-[10px] font-medium bg-[#0A0A0B] p-[10px] gap-[10px]">
                  <div className="text-center flex flex-col">
                    <span className="opacity-80">Today's reservations</span>
                    <span className="text-[11px]">10</span>
                  </div>
                  <div className="text-center flex flex-col">
                    <span className="opacity-80">Next reservation in</span>
                    <span className="text-[11px]">1 h 10 min</span>
                  </div>
                </div>
              </div>
              <div
                className="absolute flex flex-col items-center w-[290px] bg-[#0A0A0B] rounded-xl rounded-b-3xl"
                style={{ bottom: 10, left: -15 }}
              >
                <div className="w-full flex justify-center items-start pt-[10px] pb-[20px]">
                  <Image
                    src="/images/arrowDown.svg"
                    alt="arrow"
                    width={30}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-[13px] text-center mb-[5px]">
                    <span className="opacity-50 mr-[5px]">Pick up:</span>
                    <span className="font-medium">12/05/2023 at 12:00 PM</span>
                  </div>
                  <div className="text-[13px] text-center mb-[5px]">
                    <span className="opacity-50 mr-[5px]">From:</span>
                    <span className="font-medium">
                      San Francisco International Airport
                    </span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="text-[#6C6CF8] text-[13px] font-medium mb-[10px] cursor-pointer">
                      View reservation details
                    </span>
                    <span className="text-[13px] font-medium">Trip status</span>
                  </div>
                  <div className="relative flex justify-between items-center mt-[15px] mb-[15px]">
                    <div
                      className="w-[20px] h-[20px] black-gray rounded-[50%]"
                      style={{ zIndex: 2 }}
                    >
                      <Image
                        src="/images/success.svg"
                        alt="success"
                        width={20}
                        height={20}
                        style={{ zIndex: 2 }}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="w-[20px] h-[20px] black-gray rounded-[50%]"
                      style={{ zIndex: 2 }}
                    >
                      <Image
                        src="/images/success.svg"
                        alt="success"
                        width={20}
                        height={20}
                        style={{ zIndex: 2 }}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="w-[20px] h-[20px] black-gray rounded-[50%]"
                      style={{ zIndex: 2 }}
                    >
                      <Image
                        src="/images/success.svg"
                        alt="success"
                        width={20}
                        height={20}
                        style={{ zIndex: 2 }}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="w-[20px] h-[20px] black-gray rounded-[50%]"
                      style={{ zIndex: 2 }}
                    ></div>
                    <div
                      className="w-[20px] h-[20px] black-gray rounded-[50%]"
                      style={{ zIndex: 2 }}
                    ></div>
                    <div className="w-full absolute z-1 flex">
                      <div className="w-full h-[2px] bg-[#368D69]"></div>
                      <div className="w-full h-[2px] black-gray"></div>
                    </div>
                  </div>
                  <div className="flex gap-[6px]">
                    <Button
                      className={`
                        rounded-lg bg-transparent border-2 border-white cursor-pointer hover:bg-gray-600 py-[12px] transition duration-500 w-2/4 flex flex-col text-center items-center
                      `}
                    >
                      <span className="text-[12px] font-medium">No show</span>
                    </Button>
                    <Button
                      className={`
                        rounded-lg blue cursor-pointer hover:bg-gray-600 py-[12px] transition duration-500 w-2/4 flex flex-col text-center items-center
                      `}
                    >
                      <span className="text-[12px] font-medium">
                        In the car
                      </span>
                    </Button>
                  </div>
                  <div className="w-full text-center text-[13px] py-[20px]">
                    <span className="underline underline-offset-4 opacity-50 font-medium cursor-pointer">
                      Cancel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileDriver);
