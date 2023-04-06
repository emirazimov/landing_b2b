import { useModal } from '@/context/modalOpenContext';
import React, { FC, useEffect, useRef, useState } from 'react';

//UI
import SpinnerLoader from '../SpinnerLoader';

//Types
import { ModalProps } from './modal.types';

const Modal: FC<ModalProps> = ({ children, title, load, message, type, modalType }) => {
  const { isOpen, setIsOpen } = useModal();

    return (
        <div 
            
            className={`h-screen w-full px-[10px] md:px-[0] fixed flex justify-center bg-[#000000c2] items-center transition-all duration-500 bg-black-200 
                ${ !isOpen ? "z-[-1] opacity-0" : isOpen === modalType ? "z-[999] opacity-100" : "z-[-1] opacity-0" }`
            } 
            style={{ top: 0, left: 0 }}
        >
            <div className='max-h-[80vh] overflow-x-hidden scroll-p-2 overflow-scroll w-full md:w-[650px] black-gray rounded-xl p-[30px] relative'>
                <div className='flex relative items-center'>
                    <span className='w-full text-center font-medium text-base text-white'>{title}</span>
                    <div
                        className='p-[6px] hover:bg-[#242627] transition duration-500 h-8 w-8 absolute flex items-center justify-center rounded'
                        style={{ top: -5, right: -5 }}
                    >
                        <svg 
                            className={`block h-full w-full transition duration-500 cursor-pointer`} 
                            onClick={() => setIsOpen("")}
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
                <div className='pt-[10px]'>
                    {children}
                </div>
                <div 
                    className={`absolute w-full h-full bg-[#000000c2] flex justify-center items-center
                        ${ !load ? "z-[-1] opacity-0" : "z-[999] opacity-100" }
                    `} 
                    style={{ top: 0, left: 0 }}
                >
                    <SpinnerLoader />
                </div>
                <div 
                    className={`absolute w-full h-full bg-[#000000c2] flex justify-center items-center
                        ${ !message ? "z-[-1] opacity-0" : "z-[999] opacity-100" }
                    `} 
                    style={{ top: 0, left: 0 }}
                >
                    {
                        message ? (
                            <div className={`text-center text-sm ${type === "error"? "text-red-500" : "text-green-500"}`}>
                                {message}
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;