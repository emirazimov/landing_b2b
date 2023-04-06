import Image from 'next/image';
import React, { useState } from 'react';

//Context
import { useModal } from '@/context/modalOpenContext';

const MobileMenu = () => {
    const [toggle, setToggle] = useState(false);
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
        <>
            <button
                className="text-white relative h-8 w-8"
                onClick={() => setToggle(!toggle)}
            >
                <Image
                    src="/images/burger.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className={`ml-[5px] transition duration-500 ${
                        toggle ? "opacity-0" : "opacity-100"
                    }`}
                    loading="lazy"
                />
                <svg
                    className={`absolute block h-8 w-8 transition duration-500 ${
                        !toggle ? "opacity-0" : "opacity-100"
                    }`}
                    style={{ top: 0 }}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>
            <ul
                className={`absolute transition-all duration-500 text-white flex flex-col gap-7 text-sm font-medium bg-black w-full py-[20px] px-[20px] rounded-b-2xl ${
                    toggle ? "mt-[327px]" : "mt-[-327px]"
                }`}
                style={{
                    left: 0,
                    boxShadow: "0 4px 2px -2px  rgba(255, 255, 255, 0.38",
                }}
            >
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
        </>
    );
};

export default MobileMenu;