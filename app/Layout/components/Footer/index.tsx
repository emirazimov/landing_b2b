import { useModal } from "@/context/modalOpenContext";
import Image from "next/image";
import React, { FC } from "react";

//Types
import { FooterProps } from "./footer.types";

const Footer: FC<FooterProps> = () => {
  const { isOpen, setIsOpen } = useModal();

  const open = () => {
    setIsOpen("contact");
  };

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
    <footer id="footer" className="flex justify-center">
      <div className="flex flex-col gap-[70px] max-w-[1440px] w-full">
        <div className="w-full t-0 l-0 lg:px-[120px] px-[16px] pt-[30px] md:pt-[70px] flex justify-between items-center flex-col md:flex-row font-montserrat border-t-zinc-600 border-[1px] border-transparent">
          <a href="https://bookinglane.com" target="_blank" className="cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="bookinglane logo"
              width={180}
              height={37}
              loading="lazy"
            />
          </a>

          <ul className="text-white flex gap-7 text-sm font-medium pt-[30px] md:pt-0 flex-wrap md:flex-nowrap w-2/3 justify-center md:justify-end md:w-full">
            <li
              className="border-b-[1px] border-transparent hover:border-white transition-all duration-500 cursor-pointer"
              onClick={onRequestClick}
            >
              <span>Request demo</span>
            </li>
            <li className="border-b-[1px] border-transparent hover:border-white transition-all duration-500">
              <a href="#whybookinglane">
                <span>Why Bookinglane</span>
              </a>
            </li>
            <li className="border-b-[1px] border-transparent hover:border-white transition-all duration-500">
              <a href="#pricing">
                <span>Pricing</span>
              </a>
            </li>
            <li className="border-b-[1px] border-transparent hover:border-white transition-all duration-500">
              <a href="#aboutus">
                <span>About us</span>
              </a>
            </li>
            <li
              className="border-b-[1px] border-transparent hover:border-white transition-all duration-500 cursor-pointer"
              onClick={open}
            >
              <span>Contact us</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between color-white w-full t-0 l-0 md:px-[120px] pb-[30px] md:pb-[70px] items-center flex-col md:flex-row">
          <p className="text-white text-sm font-medium">
            © 2023 Bookinglane, Inc. All rights reserved.
          </p>

          <div className="flex flex-row gap-[10px] pt-[30px] md:pt-0">
            <a
              href="https://www.facebook.com/bookinglane"
              target="_blank"
              className="text-white w-[28px] cursor-pointer h-[28px] rounded-[50%] bg-white flex items-center justify-center opacity-100 hover:opacity-50 transition duration-500"
            >
              <Image
                src="/images/Facebook.svg"
                alt="Facebook link"
                width={7}
                height={14}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/bookinglane"
              target="_blank"
              className="text-white w-[28px] cursor-pointer h-[28px] rounded-[50%] bg-white flex items-center justify-center opacity-100 hover:opacity-50 transition duration-500"
            >
              <Image
                src="/images/Linkedin.svg"
                alt="Linkedin link"
                width={14}
                height={12}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.instagram.com/bookinglane/"
              target="_blank"
              className="text-white w-[28px] cursor-pointer h-[28px] rounded-[50%] bg-white flex items-center justify-center opacity-100 hover:opacity-50 transition duration-500"
            >
              <Image
                src="/images/Instagram.svg"
                alt="Instagram link"
                width={14}
                height={14}
                loading="lazy"
              />
            </a>
            <a
              href="https://twitter.com/bookinglane"
              target="_blank"
              className="text-white w-[28px] cursor-pointer h-[28px] rounded-[50%] bg-white flex items-center justify-center opacity-100 hover:opacity-50 transition duration-500"
            >
              <Image
                src="/images/Twitter.svg"
                alt="Twitter link"
                width={14}
                height={14}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
