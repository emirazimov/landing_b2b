import React, { FC, memo, useEffect, useState } from 'react';

//Types
import { MobileContentComponent, MobileContentProps } from './mobileContent.types';

const MobileContent: FC<MobileContentProps> = ({ tab, setTab }) => {
    const [currentCont, setCurrentCont] = useState<MobileContentComponent>(null);
    const [component, setComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const someFunc = async () => {
            const doMonth = await import('@/utils/constants').then(module => module.mobileArr);
            const obj: any = doMonth.find((item, idx) => idx + 1 === tab)

            if (obj) {
                setCurrentCont(obj);
                setComponent(<obj.component />);
            }
        };

        someFunc();
    }, [tab]);

    return (
        <div style={{ top: "20px", zIndex: tab ? 10 : 0 }} className={`absolute h-[485px] md:h-[585px] rounded-b-lg overflow-y-scroll flex flex-col items-start transition duration-500 w-full opacity-1 ${tab ? "" : "opacity-0"}`}>
            <div className='flex justify-between items-center w-full relative mb-[10px]'>
                <div
                    className='absolute h-[20px] w-[20px] flex items-center justify-center cursor-pointer' 
                    style={{ fontSize: "20px", top: 3 }}
                    onClick={() => setTab(0)}
                >
                    <span className='rotate-180'>&#8250;</span>
                </div>
                <p className='text-center w-full font-medium text-sm'>
                    {
                        currentCont?.title
                    }
                </p>
            </div>
            <div className='relative flex justify-between items-start w-full h-full'>
                {
                    component
                }
            </div>
        </div>
    );
};

export default memo(MobileContent);