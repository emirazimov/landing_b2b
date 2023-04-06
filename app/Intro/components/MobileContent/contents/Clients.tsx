import { Button } from "@/app/UI";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div
      style={{ fontSize: "13px" }}
      className="flex items-center gap-[6px] flex-col h-full w-full"
    >
      <div className="flex justify-between w-full gap-[5px]">
        <div className="black-gray w-full rounded-lg relative h-[36px]">
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
      </div>

      <div className="flex flex-col justify-between w-full black-gray rounded-lg p-[16px] gap-[5px] relative">
        <span className="font-medium text-[12px]">John Doe</span>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Phone:</span>
          <span>+1 (999) 000-0000</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Email:</span>
          <span>name@gmail.com</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Card:</span>
          <span>**** **** **** 1234</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Card nickname:</span>
        </div>
        <div className="flex gap-[10px] mt-[5px]">
          <Button
            className={`w-full border-2 border-white py-[5px] hover:bg-gray-600 rounded-lg transition-all duration-500 font-medium`}
          >
            <span style={{ fontSize: "12px" }}>Add invoice</span>
          </Button>
          <Button
            className={`w-full border-2 border-[#6F6FFF] text-[#6F6FFF] py-[5px] hover:bg-gray-600 rounded-lg transition-all duration-500 font-medium`}
          >
            <span style={{ fontSize: "12px" }}>Add reservation</span>
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
        <span className="font-medium text-[12px]">John Doe</span>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Phone:</span>
          <span>+1 (999) 000-0000</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Email:</span>
          <span>name@gmail.com</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Card:</span>
          <span>**** **** **** 1234</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Card nickname:</span>
        </div>
        <div className="flex gap-[10px] mt-[5px]">
          <Button
            className={`w-full border-2 border-white py-[5px] hover:bg-gray-600 rounded-lg transition-all duration-500 font-medium`}
          >
            <span style={{ fontSize: "12px" }}>Add invoice</span>
          </Button>
          <Button
            className={`w-full border-2 border-[#6F6FFF] text-[#6F6FFF] py-[5px] hover:bg-gray-600 rounded-lg transition-all duration-500 font-medium`}
          >
            <span style={{ fontSize: "12px" }}>Add reservation</span>
          </Button>
        </div>
        <div
          className="absolute cursor-pointer"
          style={{ right: "20px", top: "35%" }}
        >
          <span className="text-lg">&#8250;</span>
        </div>
      </div>
      <div className="w-full h-full flex items-end">
        <Button
          className={`
            blue rounded-lg py-[12px] md:py-[8px] px-[30px] w-full transition hover:bg-gray-600 duration-500 w-2/4
        `}
        >
          Add client
        </Button>
      </div>
    </div>
  );
};

export default Clients;
