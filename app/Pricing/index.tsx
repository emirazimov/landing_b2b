import dynamic from "next/dynamic";
import React, { useCallback } from "react";

//Context
import { useModal } from "@/context/modalOpenContext";

//Helpers
import { useMobile } from "@/helpers/responsive.helper";

//Consts
import { priceArr } from "./constant";

//Components
import PriceCard from "./components/PriceCard";
const PriceModal = dynamic(() => import("./components/PriceModal"));

const Pricing = () => {
  const { mobile, width } = useMobile(1110);
  const { isOpen, setIsOpen } = useModal();

  const open = useCallback(() => {
    setIsOpen("pricing");
  }, [isOpen]);

  return (
    <div id="pricing" className="text-white md:h-full mb-[10vh]">
      <h2 className="text-xl md:text-2xl font-black text-center mb-[30px]">
        Pricing
      </h2>

      <div
        className={`flex gap-[30px] mx-auto ${
          mobile
            ? "flex-col " + (width >= 650 ? "w-2/3" : "w-full")
            : "md:flex-row w-full"
        }`}
      >
        {priceArr.map((item, index) => {
          if (item.btnText === "Claim now") {
            return (
              <PriceCard
                {...item}
                onClick={open}
                cardIndex={index + 1}
                key={index}
              />
            );
          }

          return <PriceCard {...item} cardIndex={index + 1} key={index} />;
        })}
      </div>

      <PriceModal />
    </div>
  );
};

export default Pricing;
