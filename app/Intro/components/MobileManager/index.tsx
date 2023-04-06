import dynamic from "next/dynamic";
import Image from "next/image";
import React, { FC, memo, useState } from "react";

//UI
import { Button } from "@/app/UI";

//Types
import { MobileManagerI } from "./mobileManager.types";

//Helpers
import { useMobile } from "@/helpers/responsive.helper";

//Utils
import { mobileArr, days, barArray } from "@/utils/constants";

//Components
import Calendar from "../Calendar";

const MobileContent = dynamic(() => import("../MobileContent"));

const Bar = ({ num, height, active }: { num: string; height: string; active?: boolean }) => {
  const [activeBar, setActive] = useState(active);

  return (
      <div
        onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}
        className={`h-[${height}] w-[20px] ${activeBar ? "blue" : "gray"} rounded-[5px] relative cursor-pointer transition-all duration-500`}
      >
        <span className={`absolute opacity-${activeBar ? "100" : "0"} transition-all duration-500 text-[12px] w-full font-medium`} style={{
          top: -18,
          left: -15
        }}>{num}</span>
      </div>
  )
}

const MobileManager: FC<MobileManagerI> = () => {
  const [tab, setTab] = useState(0);
  const { mobile, width } = useMobile(1180);

  const onRequestClick = async () => {
    const fetch = await import('react-calendly').then(module => module.openPopupWidget);
    const calendlyURL = await import('@/utils/constants').then(module => module.calendlyURL);
    const calendlySetting = await import('@/utils/constants').then(module => module.calendlySetting);

    fetch({
      url: calendlyURL,
      //@ts-ignore
      pageSettings: calendlySetting,
    });
  };

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
                  background: "#2A2D2E",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px]"
              >
                In progress
              </span>
              <span
                style={{
                  top: "210px",
                  left: "-170px",
                  background: "#4D4DE0",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px]"
              >
                On the way
              </span>
              <span
                style={{
                  top: "280px",
                  left: "-105px",
                  background: "#D66D33",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px]"
              >
                Pending
              </span>
              <span
                style={{
                  top: "90px",
                  right: "-120px",
                  background: "#EE3757",
                  fontSize: "12px",
                }}
                className="font-medium absolute rounded-xl py-[3px] px-[16px]"
              >
                Canceled
              </span>
              <span
                style={{
                  top: "370px",
                  left: "-160px",
                  fontSize: "14px",
                  borderColor: "#5B6267",
                }}
                className={`border-[3px] black-gray flex items-center gap-[6px] absolute rounded-xl p-[16px] transition-all duration-500 ${
                  tab ? "ml-[-40px] opacity-0" : "ml-0 opacity-100"
                }`}
              >
                <span className="text-gray-300">Total:</span>
                <span>$123.00</span>

                <span
                  style={{ background: "#368D69", fontSize: "10px" }}
                  className="rounded-xl py-[3px] px-[10px]"
                >
                  Paid
                </span>
              </span>
              <span
                style={{
                  top: "500px",
                  left: "-260px",
                  fontSize: "14px",
                  borderColor: "#5B6267",
                  zIndex: 30,
                }}
                className={`border-[3px] bg-black flex flex-col items-center gap-[20px] absolute rounded-xl p-[16px] transition-all duration-500 ${
                  tab ? "ml-[-40px] opacity-0" : "ml-0 opacity-100"
                }`}
              >
                <div className="flex items-center w-[280px] justify-center relative">
                  <span
                    className="absolute rotate-180 text-lg"
                    style={{ left: "10px" }}
                  >
                    &#8250;
                  </span>
                  <span className="font-medium">Reservations</span>
                </div>
                <div className="flex gap-[6px]">
                  <Button
                    className={`
                      rounded-lg gray cursor-pointer hover:bg-gray-600 py-[12px] md:py-[8px] px-[40px] transition duration-500 w-2/4 flex flex-col text-center items-center
                    `}
                  >
                    <>
                      <span style={{ fontSize: "12px" }}>Website</span>
                      <span style={{ color: "#368D69", fontSize: "10px" }}>
                        active
                      </span>
                    </>
                  </Button>
                  <Button
                    className={`
                      rounded-lg gray cursor-pointer hover:bg-gray-600 py-[12px] md:py-[8px] px-[40px] transition duration-500 w-2/4 flex items-center gap-[6px] relative
                    `}
                  >
                    <>
                      <span style={{ fontSize: "12px" }}>Affiliates</span>
                      <div
                        className="absolute rounded-[50%] bg-red-500 flex items-center justify-center"
                        style={{
                          fontSize: "12px",
                          width: "20px",
                          height: "20px",
                          right: 15,
                        }}
                      >
                        <span className="absolute">3</span>
                      </div>
                    </>
                  </Button>
                </div>
              </span>
              <span
                style={{
                  top: "520px",
                  right:
                    width < 1300
                      ? width < 500
                        ? "-50px"
                        : "-100px"
                      : "-200px",
                  fontSize: "13px",
                  borderColor: "#5B6267",
                  zIndex: 30,
                }}
                className={`border-[3px] gray flex items-center gap-[6px] absolute cursor-pointer rounded-xl p-[12px] transition-all duration-500 ${
                  tab ? "mr-[-40px] opacity-0" : "mr-0 opacity-100"
                }`}
              >
                <Image
                  src="/images/dollar-circle.svg"
                  alt="Cell"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span className="font-medium">Payment information</span>

                <span
                  style={{ background: "#368D69", fontSize: "10px" }}
                  className="rounded-xl py-[3px] px-[10px]"
                >
                  Paid
                </span>
              </span>
              <Calendar tab={tab} />
            </>
          ) : null}
          <div
            className="h-full w-full rounded-[25px] py-[5px] px-[15px]"
            style={{ background: "#0A0A0B" }}
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
            <div className="pt-[10px] transition-all duration-500">
              <div className="flex justify-between items-center">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={90}
                  height={12}
                  loading="lazy"
                />
                <Image
                  src="/images/formobile/ic_profile.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </div>
              <div className="relative flex items-center pt-[20px] w-full">
                <ul
                  style={{ top: "20px", zIndex: !tab ? 10 : 0 }}
                  className={`absolute h-[490px] md:h-[585px] w-full transition duration-500 opacity-1 ${
                    !tab ? "" : "opacity-0"
                  }`}
                >
                  {mobileArr?.map(
                    (
                      item: {
                        img: string;
                        title: string;
                        notification?: number;
                      },
                      idx: number
                    ) => (
                      <li
                        key={idx}
                        onClick={() =>
                          idx < 5 ? setTab(idx + 1) : onRequestClick()
                        }
                        className="flex w-full items-center cursor-pointer justify-between gap-[5px] py-[7px] border-b-zinc-800 border-[1px] border-transparent"
                      >
                        <div className="flex items-center gap-[5px]">
                          <Image
                            src={item.img}
                            alt="logo"
                            width={20}
                            height={20}
                            loading="lazy"
                          />
                          <span style={{ fontSize: "12px" }}>{item.title}</span>
                        </div>
                        <div className="flex gap-[5px] items-center">
                          {item?.notification ? (
                            <div
                              className="rounded-[50%] bg-red-500 h-[20px] w-[20px] flex items-center justify-center"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="absolute">
                                {item?.notification}
                              </span>
                            </div>
                          ) : null}
                          <span>&#8250;</span>
                        </div>
                      </li>
                    )
                  )}
                  <li className="w-full h-[185px] mt-[10px] black-gray p-[10px] rounded-t-xl rounded-b-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-[5px]">
                        <Image src="/images/formobile/diagram.svg" alt="diagram icon" width={15} height={15} />
                        <span className="font-medium text-[12px]">Summary</span>
                      </div>
                      <span className="font-medium text-[12px]">$4,560.00</span>
                    </div>
                    <div className="w-full text-center relative">
                      <span className="text-[10px] font-medium">JANUARY 6-12</span>
                      <span className="absolute text-lg" style={{ right: 10 }}>&#8250;</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="h-[105px] flex justify-between gap-[10px] items-end mb-[10px]">
                        {
                          barArray.map((item, index) => (
                            <Bar key={index} num={item.num} height={item.height} active={item.active} />
                          ))
                        }
                      </div>
                      <div className="flex justify-between">
                        {
                          days.map((day, i) => (
                            <span className="text-[11px] font-medium w-full text-center" key={i}>{day}</span>
                          ))
                        }
                      </div>
                    </div>
                  </li>
                </ul>
                <MobileContent tab={tab} setTab={setTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileManager);
