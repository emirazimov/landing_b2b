import React from "react";
import Image from "next/image";

//Helpers
import { useMobile } from "@/helpers/responsive.helper";

const partneredArr = [
  "/images/Group 2986.svg",
  "/images/Group 2987.svg",
  "/images/Group 2988.svg",
  "/images/Group 2989.svg",
];

const Partnered = () => {
  const { mobile } = useMobile(530);

  return (
    <div className="text-white h-full mb-[10vh]">
      <h1 className="text-lg font-medium text-center mb-[60px]">
        Partnered with
      </h1>

      <div className="flex flex-row gap-[24px] flex-wrap justify-center">
        {partneredArr?.map((partner: string, idx) => (
          <Image
            key={idx}
            src={partner}
            alt={partner}
            width={mobile ? 300 : 222}
            height={85}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Partnered;
