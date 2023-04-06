import React from 'react';

//Context
import { useModal } from '@/context/modalOpenContext';

const DesktopMenu = () => {
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
        <ul className="text-white flex gap-7 text-sm font-medium">
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
    );
};

export default DesktopMenu;