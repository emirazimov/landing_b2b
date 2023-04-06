import { Button } from "@/app/UI";
import Image from "next/image";
import React from "react";

const CollectPayment = () => {
  return (
    <div className="w-full h-full flex flex-col gap-[5px] justify-between items-end">
      <div className="w-full flex flex-col gap-[5px]">
        <div className="flex items-center justify-between black-gray px-[10px] py-[5px] rounded-lg w-full">
          <span className="text-[13px] font-medium">Select reservation(s)</span>
          <span className="text-lg mt-[-5px]">&#8250;</span>
        </div>

        <div className="flex items-center justify-between black-gray px-[10px] py-[5px] rounded-lg w-full">
          <span className="text-[13px] font-medium opacity-50">
            Select reservation(s)
          </span>
          <div className="flex items-center gap-[5px]">
            <span className="text-[13px] opacity-50">$0.00</span>
            <span className="text-lg mt-[-5px]">&#8250;</span>
          </div>
        </div>
      </div>

      <div className="bg-red w-full">
        <p className="text-end text-xl font-medium py-[10px]">0.00</p>

        <div className="flex flex-wrap justify-between gap-[5px]">
          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>AC</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg flex items-center justify-center cursor-pointer">
            <Image
              src="/images/formobile/cancel.svg"
              alt="cancel"
              width={25}
              height={25}
              loading="lazy"
            />
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg flex items-center justify-center cursor-pointer">
            <Image
              src="/images/formobile/proc.svg"
              alt="cancel"
              width={15}
              height={15}
              loading="lazy"
            />
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg flex items-center justify-center cursor-pointer">
            <Image
              src="/images/formobile/del.svg"
              alt="cancel"
              width={15}
              height={15}
              loading="lazy"
            />
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>7</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>8</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>9</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg flex items-center justify-center cursor-pointer">
            <Image
              src="/images/formobile/um.svg"
              alt="cancel"
              width={12}
              height={12}
              loading="lazy"
            />
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>4</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>5</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>6</span>
          </Button>

          <Button className="font-bold black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>-</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>1</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>2</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>3</span>
          </Button>

          <Button className="font-bold black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>+</span>
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg flex items-center justify-center cursor-pointer">
            <Image
              src="/images/formobile/rotate.svg"
              alt="cancel"
              width={25}
              height={25}
              loading="lazy"
            />
          </Button>

          <Button className="font-medium black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>0</span>
          </Button>

          <Button className="font-bold black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>.</span>
          </Button>

          <Button className="font-bold black-gray w-[60px] h-[42px] rounded-lg cursor-pointer">
            <span>=</span>
          </Button>
        </div>

        <div className="w-full mt-[10px]">
          <Button
            className={`
              blue rounded-lg font-medium py-[12px] md:py-[8px] px-[30px] w-full transition hover:bg-gray-600 duration-500 w-2/4 cursor-pointer
          `}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollectPayment;
