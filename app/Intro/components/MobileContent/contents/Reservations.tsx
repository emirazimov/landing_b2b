import React, { useState } from "react";

//UI
import { Button } from "@/app/UI";
import Image from "next/image";

const Reservations = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      style={{ fontSize: "13px" }}
      className="flex items-center gap-[6px] flex-col h-full justify-between w-full"
    >
      <div className="flex gap-[6px] w-full">
        <Button
          className={`
              rounded-lg gray cursor-pointer hover:bg-gray-600 py-[12px] md:py-[8px] w-full transition duration-500 w-2/4 flex flex-col text-center items-center
          `}
        >
          <>
            <span style={{ fontSize: "12px" }}>Website</span>
            <span style={{ color: "#368D69", fontSize: "10px" }}>active</span>
          </>
        </Button>
        <Button
          className={`
              rounded-lg gray text-center cursor-pointer hover:bg-gray-600 py-[12px] md:py-[8px] w-full transition duration-500 w-2/4 flex items-center gap-[6px] relative
          `}
        >
          <>
            <span className="text-center w-full" style={{ fontSize: "12px" }}>
              Affiliates
            </span>
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
      <div className="flex justify-between w-full gap-[5px]">
        <div className="black-gray w-full rounded-lg relative">
          <input
            type="text"
            className="absolute w-full h-full rounded-lg bg-transparent focus:outline-0 px-[20px] z-10"
          />
          <div className="flex items-center w-full h-full px-[20px] gap-[5px]">
            <Image
              src="/images/search.svg"
              alt="filters icon"
              width={13}
              height={13}
              loading="lazy"
            />
            <span style={{ color: "#626262" }}>Search</span>
          </div>
        </div>
        <div className="w-[43px] h-[36px] black-gray rounded-lg flex items-center justify-center cursor-pointer">
          <Image
            src="/images/filters.svg"
            alt="filters icon"
            width={20}
            height={20}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full black-gray rounded-lg p-[16px] gap-[5px] relative">
        <span style={{ color: "#A5A5A5", fontSize: "10px" }}>
          Global network:
        </span>
        <span>Reservation #0001234789</span>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Trip status:</span>
          <span
            style={{
              top: "140px",
              left: "-120px",
              background: "#2A2D2E",
              fontSize: "8px",
            }}
            className="rounded-xl py-[1px] px-[5px]"
          >
            In progress
          </span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>From:</span>
          <span>123 Hanson St.</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>To:</span>
          <span>34 Warren Ave</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Pick up:</span>
          <span>10/22/2023 at 12:00 PM</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Total:</span>
          <div className="flex items-center gap-[5px]">
            $123.00
            <span
              style={{
                top: "140px",
                left: "-120px",
                background: "#D66D33",
                fontSize: "8px",
              }}
              className="rounded-xl py-[1px] px-[5px]"
            >
              Pending
            </span>
          </div>
        </div>
        <div className="flex gap-[10px] mt-[5px]">
          <Button
            className={`w-full border-2 border-white py-[10px] hover:bg-gray-600 rounded-lg transition-all duration-500`}
          >
            <span>Decline</span>
          </Button>
          <Button
            className={`w-full blue py-[10px] hover:bg-gray-600 rounded-lg transition-all duration-500`}
          >
            <span>Accept</span>
          </Button>
        </div>
        <div
          className="absolute cursor-pointer"
          style={{ right: "20px", top: "35%" }}
        >
          <span className="text-lg">&#8250;</span>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full black-gray rounded-lg p-[16px] gap-[5px] relative">
        <span style={{ color: "#A5A5A5", fontSize: "10px" }}>
          Global network:
        </span>
        <span>Reservation #0001234789</span>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Trip status:</span>
          <span
            style={{
              top: "140px",
              left: "-120px",
              background: "#2A2D2E",
              fontSize: "8px",
            }}
            className="rounded-xl py-[1px] px-[5px]"
          >
            In progress
          </span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>From:</span>
          <span>123 Hanson St.</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>To:</span>
          <span>34 Warren Ave</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Pick up:</span>
          <span>10/22/2023 at 12:00 PM</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Total:</span>
          <span className="flex items-center gap-[5px]">
            $123.00
            <span
              style={{
                top: "140px",
                left: "-120px",
                background: "#D66D33",
                fontSize: "8px",
              }}
              className="rounded-xl py-[1px] px-[5px]"
            >
              Pending
            </span>
          </span>
        </div>
        <div className="flex gap-[10px] mt-[5px]">
          <Button
            className={`w-full border-2 border-white py-[10px] hover:bg-gray-600 rounded-lg transition-all duration-500`}
          >
            <span>Decline</span>
          </Button>
          <Button
            className={`w-full blue py-[10px] hover:bg-gray-600 rounded-lg transition-all duration-500`}
          >
            <span>Accept</span>
          </Button>
        </div>
        <div
          className="absolute cursor-pointer"
          style={{ right: "20px", top: "35%" }}
        >
          <span className="text-lg">&#8250;</span>
        </div>
      </div>

      <div className="w-full flex items-end">
        <Button
          className={`
            blue rounded-lg py-[12px] md:py-[8px] px-[30px] w-full transition hover:bg-gray-600 duration-500 w-2/4
        `}
        >
          Add reservation
        </Button>
      </div>
    </div>
  );
};

export default Reservations;
