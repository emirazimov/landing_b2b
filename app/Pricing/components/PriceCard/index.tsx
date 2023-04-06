import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

//Types
import { PriceCardI } from "./priceCard.types";

//Components
import { Button } from "@/app/UI";
import { useMobile } from "@/helpers/responsive.helper";

const PriceCard: FC<PriceCardI> = ({
  cardIndex,
  title,
  label,
  href,
  btnText,
  links,
  price,
  priceText,
  priceLabel,
  onClick = () => null,
}) => {
  const { mobile, width } = useMobile(1110);

  return (
    <div
      className={`p-[30px] text-sm flex flex-col justify-between black-gray rounded-2xl  ${
        mobile ? "w-full" : "md:w-2/4"
      } ${cardIndex === 1 && !mobile ? "lg:w-2/3" : "lg:1/3"}`}
    >
      <div className="pb-[25px] mb-[25px] border-b-zinc-600 border-[1px] border-transparent">
        <span className="gray py-[10px] px-[30px] rounded-3xl text-sm">
          {label}
        </span>
      </div>
      {/* <h3 className="text-lg font-medium">{title}</h3> */}
      <div className="mt-[25px] h-full flex gap-[20px]">
        <ul className="max-h-[290px] w-full overflow-x-hidden scroll-p-2 overflow-scroll h-full flex flex-col lg:justify-start md:flex-wrap gap-[20px]">
          {links?.map((link, index) => {
            return (
              <li
                className="flex items-center gap-[20px] break-all"
                key={index}
              >
                <Image
                  src="/images/checkbox.svg"
                  alt="checkbox"
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <span className="break-words">{link}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`flex justify-between mt-[25px] pt-[25px] border-t-zinc-600 border-[1px] border-transparent ${
          width >= 530 ? "items-center gap-[60px]" : "items-center gap-[30px]"
        }`}
      >
        <span
          className={`text-sm md:text-xl flex ${
            priceLabel ? "flex-col" : ""
          } gap-[10px]`}
        >
          <p className="font-regular text-sm">{priceLabel}</p>
          <span className="font-medium text-base md:text-xl">{price}</span>
          <span className="text-sm md:text-xl">{priceText}</span>
        </span>
        {btnText ? (
          href ? (
            <a href={href}>
              <Button
                className={` flex items-center gap-[10px] w-auto rounded-[30px] blue transition hover:bg-gray-600 duration-500 ${
                  width >= 530
                    ? "py-[10px] px-[30px] text-base"
                    : "w-full py-[10px] px-[10px] text-sm justify-center"
                }`}
              >
                <>
                  <span>{btnText}</span>
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    height={17}
                    width={17}
                    loading="lazy"
                  />
                </>
              </Button>
            </a>
          ) : (
            <Button
              onClick={onClick}
              className={` flex items-center gap-[10px] w-auto rounded-[30px] blue transition hover:bg-gray-600 duration-500 ${
                width >= 530
                  ? "py-[10px] px-[30px] text-base"
                  : "w-full py-[10px] px-[10px] text-sm justify-center"
              }`}
            >
              <>
                <span>{btnText}</span>
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  height={17}
                  width={17}
                  loading="lazy"
                />
              </>
            </Button>
          )
        ) : null}
      </div>
    </div>
  );
};

export default PriceCard;
