import Image from "next/image";
import React, { FC } from "react";

//Helpers
import { useMobile } from "@/helpers/responsive.helper";

//Types
import { HeaderProps } from "./header.types";

//Menu
import Desktop from "./Menu/desktop";
import Mobile from "./Menu/mobile";

const Header: FC<HeaderProps> = () => {
  const { mobile } = useMobile(800);

  return (
    <header className="absolute w-full t-0 l-0 lg:px-0 px-[16px] py-[20px] max-w-full flex justify-center relative">
      <div className="flex justify-between items-center max-w-full w-[1440px] px-[20px] m-auto">
        <a href="https://bookinglane.com" target="_blank" className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="bookinglane logo"
            width={180}
            height={37}
            loading="lazy"
          />
        </a>

        {
          mobile ? (
            <Mobile />
          ) : (
            <Desktop />
          )
        }
      </div>
    </header>
  );
};

export default Header;
