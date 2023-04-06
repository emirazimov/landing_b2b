import React, { FC, useEffect, useState } from 'react';

//Helpers
import { useMobile } from '@/helpers/responsive.helper';

const Num: FC<{ month: Record<string, string> }> = ({ month }) => {
    const [active, setActive] = useState(false);

    return (
        <span
            style={{ width: "30px", height: "30px" }} 
            className={`
                text-[10px] p-[10px] relative flex justify-center items-center  transition duration-500 rounded-[50%] font-medium
                ${month.afterWeek ? "text-pink" : ""}
                ${month.num ? "hover:bg-gray-600 cursor-pointer" : ""}
            `}
            onClick={() => setActive(!active)}
        >
            {month.num}
            {
                active ? (
                    <span style={{ background: "#EE3757", top: 22 }} className='w-[6px] h-[6px] absolute rounded-[50%]'></span>
                ) : null
            } 
        </span>
    );
};

const Calendar = () => {
    const [dateArr, setDateArr] = useState<any[]>([]);
    const { mobile, width } = useMobile(1180);

    useEffect(() => {
        
        const fetch = async () => {
            let arr: any[] = [];
            const doMonth = await import('@/helpers/responsive.helper').then(module => module.doMonthWithNumber);
            const { leftDates, rightDates } = await import('@/utils/constants').then(module => {
                return {
                    leftDates: module.leftDates,
                    rightDates: module.rightDates
                }
            });

            doMonth(35).forEach((month, i) => {
                
                arr.push({
                    id: i + 1,
                    active: false,
                    num: i >= 31 ? null : month,
                    afterMonth: i >= 31,
                    betweenNum: false,
                    afterWeek: leftDates.includes(month) || rightDates.includes(month)
                });
            });
            setDateArr(arr);
        };

        fetch();
    }, []);

    return (
        <div
            style={{ 
                top: "160px", right: width < 1300 ? width < 500 ? "-50px" : "-150px" : "-200px", fontSize: "13px", borderColor: "#5B6267", zIndex: 30
            }} 
            className="transition-all duration-500 border-[3px] flex items-center gap-[6px] flex-col p-[10px] rounded-xl w-[260px] justify-between absolute bg-[#0A0A0B]"
        >
            <div className='relative flex items-center justify-between w-full px-[20px] cursor-pointer'>
                <span className='text-lg'>&#8249;</span>
                <span className='font-medium'>mm/yyyy</span>
                <span className='text-lg'>&#8250;</span>
            </div>
            <div className='flex text-center text-[10px]'>
                <span className='text-pink w-[30px]'>
                    Sun
                </span>
                <span className='w-[30px]'>
                    Mon
                </span>
                <span className='w-[30px]'>
                    Tue
                </span>
                <span className='w-[30px]'>
                    Wed
                </span>
                <span className='w-[30px]'>
                    Thu
                </span>
                <span className='w-[30px]'>
                    Fri
                </span>
                <span className='text-pink w-[30px]'>
                    Sat
                </span>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    dateArr?.map((month, i) => (
                        <Num month={month} key={i+1} />
                    ))
                }
            </div>
        </div>
    );
};

export default Calendar;