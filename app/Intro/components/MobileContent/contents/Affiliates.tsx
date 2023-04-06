import React, { useState } from "react";

//UI
import { Button } from "@/app/UI";
import Image from "next/image";

const Affiliates = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ fontSize: "13px" }}
      className="flex items-center gap-[6px] flex-col h-full w-full"
    >
      <div className="flex flex-col justify-between w-full gap-[5px]">
        <div className="black-gray w-full rounded-lg relative h-[36px] flex cursor-pointer">
          <Button
            onClick={() => setActive(!active)}
            className={`w-full ${
              active ? "gray rounded-lg" : ""
            } h-full flex gap-[5px] justify-center items-center transition-all duration-500`}
          >
            <>
              <span className={`text-[12px] ${!active ? "opacity-50" : ""}`}>
                Connections
              </span>
              <span
                className={`${
                  active ? "bg-white" : "gray"
                } px-[5px] py-[3px] rounded-xl text-black text-[10px]`}
              >
                230
              </span>
            </>
          </Button>
          <Button
            onClick={() => setActive(!active)}
            className={`w-full ${
              !active ? "gray rounded-lg" : ""
            } h-full flex gap-[5px] justify-center items-center transition-all duration-500`}
          >
            <>
              <span className={`text-[12px] ${active ? "opacity-50" : ""}`}>
                Nearby
              </span>
              <span
                className={`${
                  !active ? "bg-white" : "gray"
                } px-[5px] py-[3px] rounded-xl text-black text-[10px]`}
              >
                50
              </span>
            </>
          </Button>
        </div>

        <div className="font-medium p-[8px] flex items-center justify-between black-gray rounded-lg mb-[5px] cursor-pointer">
          <span>New request</span>
          <div className="flex items-center gap-[5px]">
            <span
              className={`blue px-[5px] py-[3px] rounded-xl text-white text-[12px]`}
            >
              70
            </span>
            <span className="text-lg mt-[-5px]">&#8250;</span>
          </div>
        </div>

        <div className="flex flex-col gap-[5px]">
          <div className="flex gap-[5px] black-gray p-[10px] rounded-lg relative cursor-pointer">
            <Image
              src="/images/formobile/bookinglane.svg"
              alt="stars"
              width={50}
              height={10}
              className="rounded-[50%]"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="font-medium">Bookinglane</span>
              <span>San Francisco, CA, US</span>
              <Image
                src="/images/formobile/stars.svg"
                alt="stars"
                width={80}
                height={10}
                loading="lazy"
              />
            </div>
            <span
              className="text-lg mt-[-5px] absolute"
              style={{ top: 20, right: 10 }}
            >
              &#8250;
            </span>
          </div>

          <div className="flex gap-[5px] black-gray p-[10px] rounded-lg relative cursor-pointer">
            <Image
              src="/images/formobile/maskgroup.svg"
              alt="stars"
              width={50}
              height={10}
              className="rounded-[50%]"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="font-medium">Deluxe Limo</span>
              <span>San Francisco, CA, US</span>
              <Image
                src="/images/formobile/stars.svg"
                alt="stars"
                width={80}
                height={10}
                loading="lazy"
              />
            </div>
            <span
              className="text-lg mt-[-5px] absolute"
              style={{ top: 20, right: 10 }}
            >
              &#8250;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
